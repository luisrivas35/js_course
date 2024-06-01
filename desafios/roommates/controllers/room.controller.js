import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { readRoommate, writeRoommate } from "../utils/jsonHandler.js";

export const newRoommate = async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    const roommateData = response.data.results[0];
    const newRoommate = {
      id: uuidv4(),
      name: `${roommateData.name.first} ${roommateData.name.last}`,
    };

    const data = await readRoommate();
    data.roommates.push(newRoommate);

    await writeRoommate(data);

    return res.status(201).json(newRoommate);
  } catch (error) {
    console.error("Error adding a new roommate:", error);
    return res.status(500).json({ error: "Failed to add a new roommate" });
  }
};

export const getAllRoommates = async (req, res) => {
  try {
    const data = await readRoommate();
    const roommates = data.roommates || [];
    res.status(200).json(roommates);
  } catch (error) {
    console.error("Error retrieving roommates:", error);
    res.status(500).json({ error: "Failed to retrieve roommates" });
  }
};


