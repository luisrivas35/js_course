import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM students");
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

const create = async ({ rut, nombre, curso, nivel }) => {
  const query = {
    text: `
        INSERT INTO students (RUT,NOMBRE,CURSO,NIVEL) 
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
    values: [rut, nombre, curso, nivel],
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
      SET nombre = $1,
      curso = $2,
      nivel = $3
      WHERE rut = $4
      RETURNING *
    `,
    values: [student.nombre, student.curso, student.nivel, student.rut],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const Student = { findAll, create, findByRut, remove, update };
