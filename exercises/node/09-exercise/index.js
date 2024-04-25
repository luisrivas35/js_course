import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";
import axios from "axios";

moment.locale("es");

console.log(chalk.blue("Hello world!"));
console.log(chalk.bgGray.white("Hello world!"));

const id = uuidv4().slice(0, 6);
console.log(chalk.bgCyan.white(id));

console.log(moment().format("LL"));

console.log(_.random(1, 5));

const numeros = [1, 2, 3, 4, 5, 6];

const result = _.partition(numeros, (n) => n % 2);
const impares = result[0];
const pares = result[1];

console.log(impares);
console.log(pares);

const getProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

getProducts();

const login = async () => {
  try {
    const { data } = axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83r5^_",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

login();
