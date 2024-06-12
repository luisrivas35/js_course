import { Router } from "express";
import { isAuthenticated, isAdmin } from "../utils/auth.js";
import {
  getAllSkaters,
  registryForm,
  createSkater,
  login,
  checkLogin,
  logAdmin,
  getProfile,
} from "../controllers/skaters.controller.js";

const router = Router();



router.get("/", getAllSkaters);
router.get("/registry", registryForm);
router.post("/add-skater", createSkater);
router.get("/login", login);
router.post("/check-login", checkLogin);

router.get("/skater", isAuthenticated, getProfile);

router.get("/admin", isAuthenticated, isAdmin, logAdmin );


export default router;
