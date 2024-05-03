import express from "express";
import path from "path";
import { readFile, writeFile } from "fs/promises";


// const __dirname = import.meta.dirname;
const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/crear", async (req, res) => {
  try {
    const { archivo, contenido } = req.body;
    const filePath = path.join(__dirname, "archivos", `${archivo}.txt`); 

    await writeFile(filePath, contenido);
    console.log(`Archivo creado en: ${filePath}`);
    return res.json({ ok: true, msg: "Archivo creado exitosamente" });
  } catch (error) {
    console.error("Error al crear el archivo:", error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al crear el archivo" });
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