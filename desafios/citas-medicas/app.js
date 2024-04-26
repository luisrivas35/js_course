import express from "express";
import { engine } from 'express-handlebars';
import _ from "lodash";
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import axios from "axios";


const app = express();
const __dirname = import.meta.dirname

// handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');


const users = [];
app.get("/", async (req, res) => {
  try {
    // const id = uuidv4();
    const { results } = await axios.get(
      "https://randomuser.me/api/" 
    );
  
    // products.push(product);

    // const items = _.partition(products, (item) => item.price > 10);

    return res.json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server andando..."));
