import { Router } from "express";
import {
  getAllGastos,
  addGasto,
  removeGasto,
  updateGasto,
} from "../controllers/gastos.controller.js";

const router = Router();

router.get("/", getAllGastos);
router.post("/", addGasto);
router.delete("/:id", removeGasto);
router.put("/:id", updateGasto);

export default router;
