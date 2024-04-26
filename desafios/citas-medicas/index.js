import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import axios from "axios";
import { users, addUser } from "./data/users.data.js";

moment.locale("es");

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.set("layoutsDir", path.join(__dirname, "layouts"));
app.set("partialsDir", path.join(__dirname, "partials"));


app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/");

    const userData = {
      id: uuidv4(),
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      gender: data.results[0].gender,
      age: data.results[0].dob.age,
      timestamp: moment().format("LL"),
    };

    addUser(userData);
    console.log(chalk.white.bgWhite.blue(JSON.stringify(users, null, 2)));

    res.render("users", { user: userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
});

app.get("/list-users", (req, res) => {
  res.render("list-users", {users});
});

app.get("/by-sex", (req, res) => {
  
  const [males, females] = _.partition(users, { gender: "male" });

  res.render("by-sex", { males, females });
});



app.get("*", (req, res) => {
  res.status(404).render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});


