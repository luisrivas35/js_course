import express from "express";
import joyasRoutes from "./routes/joyas.route.js";


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
// app.use(json());


app.use("/api", joyasRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
