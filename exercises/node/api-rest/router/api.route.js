import { Router } from "express";
import { getAll, getById } from "../controllers/api.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
// router.get("/name/:name", getUserByName);
// router.post("/", createUser);
// router.delete("/:id", removeUser);
// router.put("/:id", updateUser);

export default router;
