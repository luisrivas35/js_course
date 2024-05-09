import "dotenv/config";
import express from "express";
import { Student } from "./models/student.model.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/student", async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.json({
      message: "Estos son los estudiantes que hay",
      data: students,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Se presento un error al buscar los estudiantes",
    });
  }
});

app.get("/student/:rut", async (req, res) => {
  try {
    const { rut } = req.params;
    const student = await Student.findByRut(rut);
    if (student) {
      return res.json({
        message: "Exito en la busqueda",
        data: student,
      });
    } else {
      return res.status(404).json({
        message: "Estudiante no encontrado en la DB ",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Fallo en la busqueda" });
  }
});

app.delete("/student/:rut", async (req, res) => {
  try {
    const { rut } = req.params;
    const deletedStudent = await Student.remove(rut);
    return res.json({
      message: "Estudiante removido con exito",
      data: deletedStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Fallo en la busqueda" });
  }
});

app.post("/student", async (req, res) => {
  try {
    const { rut, nombre, curso, nivel } = req.body;
    const newStudent = await Student.create({ rut, nombre, curso, nivel });
    return res.json({
      message: "Estudiante Creado con exito",
      data: newStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "No se pudo crear al estudiante" });
  }
});

app.put("/student/:rut", async (req, res) => {
  try {
    const { rut } = req.params;
    const { nombre, curso, nivel } = req.body;
    const studentUpdate = {
      nombre,
      curso,
      nivel,
      rut,
    };

    const updatedStudent = await Student.update(studentUpdate);

    return res.json({
      message: "Estudiante modificado",
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "No se pudo modificar al Estudiante" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
