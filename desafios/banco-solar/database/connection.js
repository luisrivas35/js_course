import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg;


export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  allowExitOnIdle: true,
});

try {
    const time = await pool.query('SELECT NOW()')
    console.log('Esta DB esta super conectada! ' + 'El dia de hoy es: ' + time.rows[0].now)
} catch (error) {
    console.log(error)
}