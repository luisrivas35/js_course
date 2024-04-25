import axios from "axios";
import express from "express";
import _ from "lodash";

const app = express();

const products = [];
app.get("/", async (req, res) => {
  try {
    const randomNumber = _.random(1, 20);
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + randomNumber
    );

    const product = {
      id: data.id,
      title: data.title,
      price: data.price,
    };

    products.push(product);

    const items = _.partition(products, (item) => item.price > 10);

    return res.json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server andando..."));
