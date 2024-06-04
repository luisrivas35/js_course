import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
  expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El peso del archivo que intentas subir supera el limite permitido",
  })
);

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });

// app.get("/", (req, res) => {
//   res.send(`
//  <form method="POST" enctype="multipart/form-data">
//  <input type="file" name="foto" required>
//  <button> Upload </button>
//  </form>
//  `);
// });

app.get("/", (req, res) => {
  res.send(`
 <form method="POST" action="" enctype="multipart/form-data">
 <input type="text" name="nombre" required placeholder="Nombre">
 <input type="text" name="artista" required placeholder="Artista">
 <input type="text" name="album" required placeholder="Album">
 <input type="file" name="cancion" required>
 <button> Upload! </button>
 </form>
 `);
});

app.post("/", (req, res) => {
  const { foto } = req.files;
  const { name } = foto;
  foto.mv(`${__dirname}/archivos/${name}`, (err) => {
    res.send("Archivo cargado con éxito");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App escucha en el puerto: ${PORT}`);
});
