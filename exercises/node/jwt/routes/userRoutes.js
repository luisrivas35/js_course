import express from "express";
import {
  getToken,
  verifyUserToken,
  login,
  getDashboard,
} from "../controllers/userControllers.js";

const router = express.Router()

router.get("/", getToken )
router.get("/token", verifyUserToken) 
router.get("/login", login) 
router.get("/dashboard", getDashboard)

export default router;