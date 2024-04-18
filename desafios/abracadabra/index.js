import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

const usuarios = [
  "juan",
  "jocelyn",
  "charlie",
  "david",
  "peter",
  "jhon",
  "cleo",
  "daniel",
  "maria",
  "javier",
  "ignacia",
  "brian",
];
const validateUsuario = (req, res, next) => {
  const { usuario } = req.params;
  const lowerUsuario = usuario.toLowerCase();

  if (usuarios.find((name) => name === lowerUsuario)) {
    return next();
  }
  return res.sendFile(join(__dirname, "assets", "who.jpeg"));
};


app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/abracadabra/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/abracadabra/juego/:usuario", validateUsuario, (req, res) => {
  res.send(`<h1>Bienvenido al juego, ${req.params.usuario}!</h1>`);
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const n = parseInt(req.params.n);
  const imageName = n === randomNumber ? "conejito.jpg" : "voldemort.jpg";
  const imagePath = join(__dirname, "assets", imageName);
  res.sendFile(imagePath);
});

app.use("/assets", express.static("assets"));

app.use("*", (req, res) => {
  res.status(404).send("Esta página no existe...");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió muy mal revisa ahi...");
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
