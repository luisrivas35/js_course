import { v4 as uuidv4 } from "uuid";
import { readGastos,writeGastos,  } from "../models/utils/jsonHandler.js";


export const getAllGastos = async (req, res) => {
  try {
    const gastosData = await readGastos();
    const gastos = gastosData.gastos || [];

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
      roommate, 
      descripcion,
      monto,
    };

    gastosData.gastos.push(newGasto);

    await writeGastos(gastosData);

    return res.status(201).json(newGasto);
  } catch (error) {
    console.error("Error adding gasto:", error);
    res.status(500).json({ error: "Failed to add gasto" });
  }
};

export const removeGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readGastos();
    const gastos = data.gastos || [];
    const updatedGastos = gastos.filter((gasto) => gasto.id !== id);

    if (gastos.length === updatedGastos.length) {
      return res.status(404).json({ error: "Gasto not found" });
    }

    await writeGastos({ ...data, gastos: updatedGastos });
    res.status(200).json({ message: "Gasto deleted successfully" });
  } catch (error) {
    console.error("Error deleting gasto:", error);
    res.status(500).json({ error: "Failed to delete gasto" });
  }
};

export const updateGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const { roommate, descripcion, monto } = req.body; 

    const data = await readGastos(); 
    const gastos = data.gastos || [];

    const gastoIndex = gastos.findIndex((gasto) => gasto.id === id);

    if (gastoIndex === -1) {
      return res.status(404).json({ error: "Gasto not found" });
    }

    gastos[gastoIndex] = {
      ...gastos[gastoIndex],
      roommate,
      descripcion,
      monto,
    };
   
    await writeGastos({ ...data, gastos }); 
    
    return res.status(200).json({
      message: "Gasto updated successfully",
      gasto: gastos[gastoIndex],
    });
  } catch (error) {
    console.error("Error updating gasto:", error);
    return res.status(500).json({ error: "Failed to update gasto" });
  }
};

