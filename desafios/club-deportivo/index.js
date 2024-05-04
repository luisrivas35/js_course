
import express from "express";
import { engine } from "express-handlebars";
import sportRoutes from "./routes/sport.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use('/', sportRoutes)

app.get("*", (req, res) => {
  res.status(404).render("error");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
