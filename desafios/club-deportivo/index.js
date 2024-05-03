import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import moment from "moment";
import fs from "fs";
import { sports } from "./data/club.data.js";

// controllers
import homeController from "./controllers/homeController.js";
import sportController from "./controllers/sportController.js";

const app = express();
const __dirname = path.resolve();
const sportsFilePath = path.join(__dirname, "sports.json");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

moment.locale("es");

// Routes
app.use("/", homeController);
app.use("/sports", sportController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
