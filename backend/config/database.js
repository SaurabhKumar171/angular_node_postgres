const { Pool } = require('pg');
require('dotenv').config();

// Create a PostgreSQL database connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  });

  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
    } else {
      console.log('Connected to PostgreSQL:', result.rows[0].now);
    }
  });
  
  module.exports = pool;