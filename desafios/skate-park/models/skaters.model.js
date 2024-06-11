import pool from "../database/connection.js";

export const findAll = async () => {
  try {
    const result = await pool.query("SELECT * FROM skaters");
    return result.rows;
  } catch (err) {
    console.error("Error querying the database:", err);
    throw err;
  }
};

export const findByEmail = async (email) => {
  try {
    const query = {
      text: "SELECT email, password FROM skaters WHERE email = $1",
      values: [email],
    };
    const { rows } = await pool.query(query);
    if (rows.length === 0) {
      throw new Error("Registry not Found");
    }
    return rows[0];
  } catch (error) {
    console.error("Error in findByEmail:", error);
    throw error; // Re-throw the error to propagate it to the calling function
  }
};

export const createSkater = async (skaterData) => {
  const {
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad,
    foto,
    estado,
  } = skaterData;

  try {
    const sql = `
      INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    await pool.query(sql, [
      email,
      nombre,
      password,
      anos_experiencia,
      especialidad,
      foto,
      estado,
    ]);
    return skaterData;
  } catch (err) {
    console.error("Error creating skater:", err);
    throw err;
  }
};



// Additional functions can be added here for other CRUD operations
const updateSkater = async (id, skaterData) => {
  const {
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad,
    foto,
    estado,
  } = skaterData;
  try {
    const sql = `UPDATE skaters SET email = ?, nombre = ?, password = ?, anos_experiencia = ?, especialidad = ?, foto = ?, estado = ? WHERE id = ?`;
    const [results] = await execute(sql, [
      email,
      nombre,
      password,
      anos_experiencia,
      especialidad,
      foto,
      estado,
      id,
    ]);
    return results.affectedRows; // Return the number of affected rows (0 or 1)
  } catch (err) {
    console.error("Error updating skater:", err);
    throw err; // Re-throw the error for handling at a higher level
  }
};

const deleteSkater = async (id) => {
  try {
    const sql = `DELETE FROM skaters WHERE id = ?`;
    const [results] = await execute(sql, [id]);
    return results.affectedRows; 
  } catch (err) {
    console.error("Error deleting skater:", err);
    throw err; 
  }
};

export default {
  findAll,
  createSkater,
  updateSkater,
  deleteSkater,
  findByEmail,
};
