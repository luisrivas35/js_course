import { Router } from "express";
import { getAllSkaters, registryForm, createSkater, login, checkLogin } from "../controllers/skaters.controller.js";

const router = Router();



router.get("/", getAllSkaters);
router.get("/registry", registryForm);
router.post("/add-skater", createSkater);
router.get("/login", login);
router.post("/check-login", checkLogin);


export default router;
