import { Router } from "express";
import {
  createUser,
  getAllUsers,
  removeUser,
  updateUser,
} from "../controllers/users.controller.js";

const router = Router();


router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", removeUser);
router.put("/:id", updateUser);

export default router;
