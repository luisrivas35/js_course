import express from "express";
import path from "path";
import fs from "fs";
import { sports } from "../data/club.data.js";
const router = express.Router();

const __dirname = path.resolve();
const sportsFilePath = path.join(__dirname, "sports.json");

router.get("/add-form", (req, res) => {
  res.render("add");
});

router.post("/add-sport", async (req, res) => {
  const { sportName, precio } = req.body;
  const newSport = {
    sportName,
    precio,
  };

  try {
    sports.push(newSport);
    await fs.promises.writeFile(sportsFilePath, JSON.stringify(sports));
    res.send("Sport added successfully!");
  } catch (err) {
    console.error("Error writing to file:", err);
    res.status(500).send("Error writing to file");
  }
});

router.get("/list-sports", (req, res) => {
  res.render("list", { sports });
});

export default router;
