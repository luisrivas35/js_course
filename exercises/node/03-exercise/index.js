import express from "express";
import { engine } from "express-handlebars";
import path from "path";

import { products } from "./data/products.data.js";

const app = express();

// ruta absoluta
const __dirname = import.meta.dirname;

// activar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware archivos estáticos
app.use(express.static("public"));
app.use(
  "/assets/css",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use(
  "/assets/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page 2.0", user: null });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/products", (req, res) => {
  const order = req.query.order;
  const success = req.query.success;
  const error = req.query.error;

  if (order === "desc") {
    products.sort((a, b) => b.price - a.price);
  }

  if (order === "asc") {
    products.sort((a, b) => a.price - b.price);
  }

  return res.render("products", { products, success, error });
});

app.post("/products/add", (req, res) => {
  const title = req.body.title;
  const price = req.body.price;

  if (!title || !price) {
    return res.status(403).json({ ok: false });
  }

  if (!title.trim() || !price.trim()) {
    return res.status(403).json({ ok: false });
  }

  const product = {
    id: Date.now(),
    name: title,
    price,
  };

  products.push(product);

  return res.redirect("/products?success=se agrego el producto");
});

app.get("/products/delete/:id", (req, res) => {
  const id = req.params.id;

  const product = products.find((item) => item.id === +id);
  if (!product)
    return res.redirect("/products?error=no se pudo eliminar el producto");

  const index = products.indexOf(product);
  products.splice(index, 1);

  return res.redirect("/products?success=producto eliminado");
});

// Render the update form page
app.get("/products/update/:id", (req, res) => {
  const id = req.params.id;

  // Pass the product id to the update form page
  res.render("update-product", { id });
});

// Handle form submission to update a product
app.post("/products/update/:id", (req, res) => {
  const id = req.params.id;
  const { title, price } = req.body;

  const index = products.findIndex((item) => item.id === +id);

  if (index === -1) {
    return res.redirect("/products?error=Product not found");
  }

  if (!title || !price) {
    return res.redirect(
      `/products/update/${id}?error=Title and price are required`
    );
  }

  products[index] = { ...products[index], name: title, price };

  return res.redirect("/products?success=Product updated successfully");
});

app.get("*", (req, res) => {
  res.status(404).render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
