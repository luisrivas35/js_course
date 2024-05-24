import { pool } from "../database/connection.js";

const findAll = async () => {
  const query = {
    text: "SELECT * FROM transferencias",
    rowMode: "array",
  };
  const { rows } = await pool.query(query);
  return rows;
};

const create = async ({ emisor, receptor, monto }) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Deduct the amount from the emisor's balance
    await client.query(
      "UPDATE usuarios SET balance = balance - $1 WHERE id = $2",
      [monto, emisor]
    );

    // Add the amount to the receptor's balance
    await client.query(
      "UPDATE usuarios SET balance = balance + $1 WHERE id = $2",
      [monto, receptor]
    );

    // Insert the transfer record
    const insertQuery = {
      text: `
        INSERT INTO transferencias (emisor, receptor, monto, fecha)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `,
      values: [emisor, receptor, monto],
    };

    const { rows } = await client.query(insertQuery);

    await client.query("COMMIT");
    return rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

export const Transfer = {
  findAll,
  create,
};
