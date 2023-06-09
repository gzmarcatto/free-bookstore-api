import {pool} from "../config/database.js"

async function create(name, email, password) {
  const result = await pool.query(`
			INSERT INTO users (name, email, password) 
			VALUES ($1, $2, $3) RETURNING *`, 
			[name, email, password]
		);
   return result.rows[0];
}