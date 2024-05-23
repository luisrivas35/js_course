import "dotenv/config";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.route.js";
import transferRoutes from "./routes/transfer.route.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", usersRoutes);
app.use("/transferencia", transferRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Canciones app listening on PORT ${PORT}`);
});