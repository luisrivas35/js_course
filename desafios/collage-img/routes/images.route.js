import { Router } from "express";
import { uploadImage, deleteImage } from "../controllers/images.controller.js";

const router = Router();

router.post("/imagen", uploadImage);
router.delete("/imagen/:nombre", deleteImage);

export default router;
