import "dotenv/config";
import express from "express";
import agentRoutes from "./routes/agents.route.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", agentRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FBI Security App esta atenta en el puerto: ${PORT}`);
});
