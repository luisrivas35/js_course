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

export const getSport = async (req, res) => {
  const {id} = req.params;
  const sport = await Sport.findById(id);
  return res.json(sport);
};

export const createSport = async (req, res) => {
  const {name, price} = req.body;
  const sport = await Sport.add(name, price)
  return res.json(sport);
};

export const modifySport = async (req, res) => {
  const {id} = req.params;
  const {name, price} = req.body;
  const sport = await Sport.update(id, name, price)
  return res.json(sport);
};

export const deleteSport = async (req, res) => {
  const { id } = req.params;
  const filteredSports = await Sport.remove(id);
  res.json(filteredSports);
};

