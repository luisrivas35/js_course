import { Router } from "express";
import {
  authenticateAgent,
  restrictedPage,
} from "../controllers/agents.controller.js";

const router = Router();

router.post("/signIn", authenticateAgent);
router.get("/restricted", restrictedPage);

export default router;
