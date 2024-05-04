import {Sport} from '../models/sport.model.js';


export const getAllSports = async (req, res) => {
  try {
    const sports = await Sport.findAll();
    console.log(sports); 
    return res.render("list", { sports }); 
  } catch (err) {
    console.error(err); 
    return res.status(500).render("error", { err }); 
  }
};

export const allJson = async (req, res) => {
  try {
    const sports = await Sport.findAll();
    console.log(sports); 
    return res.json({ sports }); 
  } catch (err) {
    console.error(err); 
    return res.status(500).render("error", { err });
  }
};


export const getSport = async (req, res) => {
  const {id} = req.params;
  const sport = await Sport.findById(id);
  return res.json(sport);
};

export const createSport = async (req, res) => {
  try {
    return res.render("add");
  } catch (err) {
    console.error(err);
    return res.status(500).render("error", { err });
  }
};

export const addSport = async (req, res) => {
  const {name, price} = req.body;
  const sport = await Sport.add(name, price)
  return res.status(200).send("Sport added successfully!");
};

export const editSport = async (req, res) => {
  try {
    return res.render("edit");
  } catch (err) {
    console.error(err);
    return res.status(500).render("error", { err });
  }
};

export const modifySport = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const existingSport = await Sport.findById(id);
    if (!existingSport) {
      const errorMessage = "Sport not found";
      return res.status(404).render("error", { err: errorMessage });
    }

    const updatedSport = await Sport.update(id, name, price);

    return res.status(200).send("Sport edited successfully!");
  } catch (err) {
    console.error("Error editing sport:", err);
    return res.status(500).render("error", { err });
  }
};


export const removeSport = async (req, res) => {
  try {
    return res.render("remove");
  } catch (err) {
    console.error(err);
    return res.status(500).render("error", { err });
  }
};

export const deleteSport = async (req, res) => {
  const { id } = req.params;
  const existingSport = await Sport.findById(id);
  if (!existingSport) {
    const errorMessage = "Sport not found";
    return res.status(404).render("error", { err: errorMessage });
  }
  const filteredSports = await Sport.remove(id);
  return res.status(200).send("Sport deleted successfully!");
};

