import { pool } from "../database/connection.js";
import { nanoid } from "nanoid";

const findAll = async () => {

  const query = {
    text: "SELECT * FROM students",
    // rowMode: "array"
  };
  const { rows } = await pool.query(query);
  return rows;
};

const findByRut = async (rut) => {
  const query = {
    text: `SELECT * FROM students WHERE rut = $1`,
    values: [rut],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

const create = async (student) => {
  const query = {
    text: `
        INSERT INTO students (ID,RUT,NOMBRE,CURSO,NIVEL) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
    values: [student.id, student.rut, student.nombre, student.curso, student.nivel],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

const remove = async (rut) => {
  const query = {
    text: `
            DELETE FROM students
            WHERE rut = $1
            RETURNING *
        `,
    values: [rut],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

const update = async (student) => {
  const query = {
    text: `
      UPDATE students
      SET id = $1,
      nombre = $2,
      curso = $3,
      nivel = $4
      WHERE rut = $5
      RETURNING *
    `,
    values: [student.id, student.nombre, student.curso, student.nivel, student.rut],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const Student = { findAll, create, findByRut, remove, update };
