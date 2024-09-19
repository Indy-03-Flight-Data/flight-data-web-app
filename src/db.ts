import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',          // Your PostgreSQL username
  host: 'localhost',         // The host where PostgreSQL is running
  database: 'flight_data',   // Your database name
  password: 'Coral', // Your PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

export default pool;
