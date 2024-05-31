import "dotenv/config";
import express from "express";


import apiRoute from './router/api.route.js';
// import router from './router/.js';

const app = express();

// Middlewares to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
