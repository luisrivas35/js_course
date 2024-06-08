import express from 'express';
import userRoutes from './routes/userRoutes.js';
 import "dotenv/config";

const PORT = process.env.PORT;

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes);


app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`)
})
