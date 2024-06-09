import {
  findAll,
  createSkater as createSkaterModel,
  
} from "../models/skaters.model.js";

export const getAllSkaters = async (req, res) => {
  try {
    const skaters = await findAll();
    res.render("index", { skaters }); 
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { err });
  }
};

export const createSkater = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad, foto, estado } =
    req.body;


      const newSkater = {
        email,
        nombre,
        password,
        anos_experiencia,
        especialidad,
        foto,
        estado,
      };

      // Now you can proceed to create the skater with the uploaded photo
      try {
        await createSkaterModel(newSkater);
        console.log("Skater created successfully", JSON.stringify(newSkater));
        return res.status(201).redirect("index");
      } catch (err) {
        console.error("Error creating skater:", err);
        res.status(500).render("error", { err });
      }
  
};
 
export const registryForm = (req, res) => {
    try {
        res.status(200).render("Registro");
    } catch (err) {
        console.error(err);
        res.status(500).render("error", { err });
    }
};


