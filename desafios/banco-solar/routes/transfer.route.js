import { Router } from "express";
import {
  createTransfer,
  getAllTransfers,
} from "../controllers/transfer.controller.js";

const router = Router();

router.get("/transferencias", getAllTransfers);
router.post("/transferencia", createTransfer);

export default router;
