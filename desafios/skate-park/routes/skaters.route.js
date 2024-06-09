import { Router } from "express";
import {
  getAllSkaters,
  createSkater,
  registryForm,
} from "../controllers/skaters.controller.js";

const router = Router();



router.get("/", getAllSkaters);
router.post("/create", createSkater);
router.get("/registry", registryForm);

export default router;
