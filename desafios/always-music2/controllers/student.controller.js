import { nanoid } from "nanoid";
import { Student } from "../models/student.model.js";

export const getAllStudents = async (req, res) => {
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
};

export const getStudent = async (req, res) => {
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
};

export const createStudent = async (req, res) => {
  try {

    const { rut, nombre, curso, nivel } = req.body;
    if (!rut || !nombre || !curso || !nivel) {
        return res
          .status(404)
          .json({ message: "Todos los datos son obligatorios" });
    }

    const newStudent = {
        id: nanoid(), 
        rut, 
        nombre,
        curso, 
        nivel 
    }
    
    const student = await Student.create(newStudent);
    return res.json({
      message: "Estudiante Creado con exito",
      data: student,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "No se pudo crear al estudiante" });
  }
};

export const deleteStudent = async (req, res) => {
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
};

export const updateStudent = async (req, res) => {
  try {
    const { rut } = req.params;
    const { id, nombre, curso, nivel } = req.body;
    
    const updatedStudent = await Student.update({ id, rut, nombre, curso, nivel });

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
};
