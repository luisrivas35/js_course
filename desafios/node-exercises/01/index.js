import express from "express"; // ES6 module syntax

const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
  {
    id: 3,
    name: "product 3",
  },
];

app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);

  if (product) {
    res.json(product); 
  } else {
    res.status(404).json({ error: "Product not found" }); 
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// enrutamiento
// app.get('/', (req, res) =>{
//     res.json({ msg: "Hello from nodejs" });
// })

// app.get("/chao", (req, res) => {
//   res.json({ msg: "Bye from nodejs" });
// });

// app.listen(port, () =>{
//     console.log('Example app listening on port 3000')
// })
