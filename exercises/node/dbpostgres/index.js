import express from "express";
import "dotenv/config";
import { User } from "./model/user.model.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    return res.json(users);
  } catch (error) {
    console.error("Error requesting users:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, edad } = req.body;

    const newUser = await User.create({
      name,
      edad,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error requesting users:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
