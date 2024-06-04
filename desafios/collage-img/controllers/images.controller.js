import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadImage = (req, res) => {
  
  if (!req.files || Object.keys(req.files).length === 0) {
    console.log("No subio nada.");
    return res.status(400).send("Imagen no pudo ser procesada.");
  }

  const { target_file: targetFile } = req.files;
  const { posicion: position } = req.body;

  const uploadPath = path.join(__dirname, "../public/imgs");
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log("Directorio Creado:", uploadPath);
  }

  const fileName = `imagen-${position}.jpg`;
  const filePath = path.join(uploadPath, fileName);
  
  targetFile.mv(filePath, (err) => {
    if (err) {
      console.error("Error al mover el archivo:", err);
      return res.status(500).send(err);
    }
    console.log("Imagen se subio correctamente:", filePath);
    res.redirect("/collage");
  });
};

const deleteImage = (req, res) => {
  const { nombre: imageName } = req.params;
  const imagePath = path.join(__dirname, "../public/imgs", imageName);

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error al eliminar el archivo:", err);
      return res.status(500).send("Error en el server.");
    }
    console.log("File deleted successfully:", imagePath);
    res.redirect("/collage");
  });
};

export { uploadImage, deleteImage };
