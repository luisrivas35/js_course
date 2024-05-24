import { User } from "../models/users.model.js";
import { handleError } from "../database/errors.js";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { nombre, balance } = req.body;

    if (!nombre || !balance) {
      return res.status(400).json({ ok: false, msg: "campos obligatorios" });
    }

    const newUser = {
      nombre,
      balance,
    };

    const user = await User.create(newUser);
    return res.json(user);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const removeUser = async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    const user = await User.remove(id);
    return res.json(song);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const updateUser = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const { id } = req.params;
    const { nombre, balance } = req.body;
    const user = await User.update({
      id,
      nombre,
      balance,
    });
    return res.json(song);
  } catch (error) {
    console.log(error);
    const { code, msg } = handleError(error);
    return res.status(code).json({ ok: false, msg });
  }
};
