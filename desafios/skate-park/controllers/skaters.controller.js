import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import { findAll, findByEmail, createSkater as createSkaterModel } from "../models/skaters.model.js";

export const getAllSkaters = async (req, res) => {
  try {
    const skaters = await findAll();
    res.render("index", { skaters }); 
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { err });
  }
};

export const registryForm = (req, res) => {
  try {
    res.status(200).render("registro");
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { err });
  }
};

export const createSkater = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad, estado } =
    req.body;

  // Check if file was uploaded
  if (!req.files || !req.files.foto) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "foto") is used to retrieve the uploaded file
  const photo = req.files.foto;
  const __dirname = path.resolve();

  const dir = path.join(__dirname, "public/assets/imgs");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Use the mv() method to place the file in the "public/assets/imgs" directory
  const photoPath = path.join("assets/imgs", photo.name);
  const uploadPath = path.join(__dirname, "public", photoPath);

  photo.mv(uploadPath, async function (err) {
    if (err) {
      console.error("Error uploading photo:", err);
      return res.status(500).send(err);
    }
    console.log("Photo uploaded successfully");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSkater = {
      email,
      nombre,
      password: hashedPassword,
      anos_experiencia,
      especialidad,
      foto: photoPath, 
      estado: true,
    };

    try {
      await createSkaterModel(newSkater);
      console.log("Skater created successfully", JSON.stringify(newSkater));
      return res.status(201).redirect("/");
    } catch (err) {
      console.error("Error creating skater:", err);
      res.status(500).render("error", { err });
    }
  });
};

export const login = async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { err });
  }
};

export const checkLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  console.log("Email:", email);
  try {
    const user = await findByEmail(email);
    console.log("User found:", user);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Log the retrieved user for debugging
    console.log("User retrieved from database:", user);

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // Create a session token
      const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      // Store the token in the session
      req.session.token = token;

      console.log("Login successful");
      res.status(200).send("Login successful");
    } else {
      console.log("Incorrect password");
      res.status(401).send("Incorrect password");
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("An error occurred during login");
  }
};







