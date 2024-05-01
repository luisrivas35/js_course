import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import moment from "moment";
import axios from "axios";
import fs from "fs";
import { sports } from "./data/club.data.js";

moment.locale("es");

const app = express();
const __dirname = path.resolve();
const sportsFilePath = path.join(__dirname, "sports.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.set("layoutsDir", path.join(__dirname, "layouts"));
app.set("partialsDir", path.join(__dirname, "partials"));
app.set("assets", path.join(__dirname, "assets"));

app.post("/add-sport", (req, res) => {
  const { sportName, precio } = req.body;
  const newSport = {
    sportName,
    precio,
  };

  try {
    const existingSports = [];
    // Check if sports.json file exists
    if (fs.existsSync(sportsFilePath)) {
      // Read existing sports data from sports.json
      existingSports = require(sportsFilePath);
    }

    // Add the new sport object to the array
    existingSports.push(newSport);

    // Write the updated array back to sports.json
    fs.writeFileSync(sportsFilePath, JSON.stringify(existingSports));

    res.send("Sport added successfully!");
  } catch (err) {
    console.error("Error writing to file:", err);
    res.status(500).send("Error writing to file");
  }
});

app.get("/leer/:nombreArchivo", async (req, res) => {
  try {
    const { nombreArchivo } = req.params;
    const filePath = path.join(__dirname, "archivos", `${nombreArchivo}.txt`);
    const fileContent = await readFile(filePath, "utf8");
    return res.send(fileContent);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "Archivo no encontrado" });
  }
});

// app.put("/renombrar", async (req, res) => {
//   try {
//     const { nombre, nuevoNombre } = req.body;
//     console.log(nombre, nuevoNombre);
//     const oldFilePath = path.join(__dirname, nombre);
//     const newFilePath = path.join(__dirname, nuevoNombre);

//     await writeFile(newFilePath, await readFile(oldFilePath, "utf8"));
//     await writeFile(oldFilePath, "");

//     return res.json({
//       ok: true,
//       msg: `Archivo renombrado de ${nombre} a ${nuevoNombre}`,
//     });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ ok: false, msg: "Error al renombrar el archivo" });
//   }
// });

// app.delete("/eliminar", async (req, res) => {
//   try {
//     const { archivo } = req.body;
//     const filePath = path.join(__dirname, archivo);

//     await writeFile(filePath, "");
//     return res.json({ ok: true, msg: "Archivo eliminado " });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ ok: false, msg: "Error al eliminar el archivo" });
//   }
// });

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en el puerto", PORT));
