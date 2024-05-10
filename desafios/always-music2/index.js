import "dotenv/config";
import express from "express";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/student', studentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Always Music 2 App listening on PORT ${PORT}`);
});
