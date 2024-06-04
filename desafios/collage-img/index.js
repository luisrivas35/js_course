import express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import imagesRouter from "./routes/images.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    abortOnLimit: true,
    responseOnLimit: "La imagen no debe ser mayor a 5MB",
  })
);
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

// Rutas
app.use("/", imagesRouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "formulario.html"));
});
app.get("/collage", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "collage.html"));
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
