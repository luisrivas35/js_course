import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import moment from "moment";
import sportRoutes from "./routes/sport.routes.js"


const app = express();
const __dirname = path.resolve();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

moment.locale("es");


app.use('/api/v1/sport', sportRoutes);


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
