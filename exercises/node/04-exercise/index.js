import express from "express";
import { engine } from "express-handlebars";

const app = express();

// ruta absoluta
const __dirname = import.meta.dirname;

// activar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware archivos estáticos

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set({
  layoutsDir: __dirname + "/views",
  partialsDir: __dirname + "/views/components/",
});



app.get("/", function (req, res) {
  res.render("Inicio", { layout: "Inicio" });
});
// Paso 4
app.get("/Contactos", function (req, res) {
  res.render("Contactos", { layout: "Contactos" });
});
// Paso 5
app.get("/Galeria", function (req, res) {
  res.render("Galeria", { layout: "Galeria" });
});

app.get("*", (req, res) => {
  res.status(404).render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
