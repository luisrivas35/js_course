import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM USERS");
  console.log(rows);
};

findAll()
const create = async ({ name, edad }) => {
  // consultas parametrizadas
  // consultas preparadas
  const query = {
    text: `
        INSERT INTO USERS (NAME,EDAD) 
        VALUES ($1, $2)
        RETURNING *
        `,
    values: [name, edad],
  };

  const { rows } = await pool.query(query);
  console.log(rows[0]);
};

// create({ name: "name4", edad: 5 })
export const User = { findAll, create };
