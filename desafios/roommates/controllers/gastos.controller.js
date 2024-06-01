import { v4 as uuidv4 } from "uuid";
import { readGastos, writeGastos } from "../utils/jsonHandler.js";

export const getAllGastos = async (req, res) => {
  try {
    // Read the current gastos data from the JSON file
    const gastosData = await readGastos();

    // Extract the gastos array from the data
    const gastos = gastosData.gastos || [];

    // Send all gastos data back to the client
    return res.status(200).json(gastos);
  } catch (error) {
    console.error("Error retrieving gastos:", error);
    res.status(500).json({ error: "Failed to retrieve gastos" });
  }
};

export const addGasto = async (req, res) => {
  try {
    const { roommate, descripcion, monto } = req.body;
    console.log("Request body:", req.body);
    const gastosData = await readGastos();

    const newGasto = {
      id: uuidv4(),
      roommate, // Assuming 'roommate' is the correct property name for the roommate's name
      descripcion,
      monto,
    };

    gastosData.gastos.push(newGasto);

    await writeGastos(gastosData);

    res.status(201).json(newGasto);
  } catch (error) {
    console.error("Error adding gasto:", error);
    res.status(500).json({ error: "Failed to add gasto" });
  }
};




export const removeGasto = (req, res) => {
  const { id } = req.params;
  // Implement your logic here
  res.send(`Remove gasto with ID: ${id}`);
};

export const updateGasto = (req, res) => {
  const { id } = req.params;
  // Implement your logic here
  res.send(`Update user with ID: ${id}`);
};
