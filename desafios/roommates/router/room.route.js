import { Router } from "express";
import {
  getAllRoommates,
  newRoommate,
} from "../controllers/room.controller.js";

const router = Router();

router.get("/", getAllRoommates);
router.post("/", newRoommate);

export default router;
