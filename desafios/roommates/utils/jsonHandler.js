import fs from "fs";

export const readRoommate = async () => {
  try {
    const data = await fs.promises.readFile("data/room.json", "utf-8");
    if (!data) {
      console.error("JSON file is empty.");
      return { roommates: [] }; // Return an empty array if the file is empty
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { roommates: [] }; // Return an empty array if file reading fails
  }
};

export const writeRoommate = async (data) => {
  try {
    await fs.promises.writeFile(
      "data/room.json",
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
};

export const readGastos = async () => {
  try {
    const data = await fs.promises.readFile("data/gastos.json", "utf-8");
    if (!data) {
      console.error("JSON file is empty.");
      return { gastos: [] }; // Return an empty array if the file is empty
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { gastos: [] }; // Return an empty array if file reading fails
  }
};

export const writeGastos = async (data) => {
  try {
    await fs.promises.writeFile(
      "data/gastos.json",
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
};
