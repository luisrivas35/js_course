import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from "../controllers/student.controller.js";

const router = Router();

router.get("/", getAllStudents);

router.get("/:rut", getStudent);

router.post("/", createStudent);

router.delete("/:rut", deleteStudent);

router.put("/:rut", updateStudent);

export default router;
