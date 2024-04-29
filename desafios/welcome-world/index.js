import express from "express";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import methodOverride from "method-override";

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.get("/leer", async (req, res) => {
  try {
    const { archivo } = req.query;
    const filePath = path.join(__dirname, archivo);

    const fileContent = await readFile(filePath, "utf8");
    return res.send(fileContent);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ ok: false, msg: "Archivo no encontrado" });
  }
});

app.post("/crear", async (req, res) => {
  try {
    const { archivo, contenido } = req.body;
    const filePath = path.join(__dirname, archivo);

    await writeFile(filePath, contenido);
    return res.json({ ok: true, msg: "Archivo creado exitosamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al crear el archivo" });
  }
});

app.put("/renombrar", async (req, res) => {
  try {
    const { nombre, nuevoNombre } = req.body;
    const oldFilePath = path.join(__dirname, nombre);
    const newFilePath = path.join(__dirname, nuevoNombre);

    await writeFile(newFilePath, await readFile(oldFilePath, "utf8"));
    await writeFile(oldFilePath, "");

    return res.json({
      ok: true,
      msg: `Archivo renombrado de ${nombre} a ${nuevoNombre}`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al renombrar el archivo" });
  }
});

app.delete("/eliminar", async (req, res) => {
  try {
    const { archivo } = req.body; 
    const filePath = path.join(__dirname, archivo);

    await writeFile(filePath, "");
    return res.json({ ok: true, msg: "Archivo eliminado " });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al eliminar el archivo" });
  }
});




app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en el puerto", PORT));
