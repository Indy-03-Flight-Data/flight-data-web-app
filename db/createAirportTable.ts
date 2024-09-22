import { Client } from 'pg';
// RUN THE SCRIPT BY USING : npm run create-table
// PostgreSQL connection details
const client = new Client({
  user: 'your_username',      // Replace with your PostgreSQL username
  host: 'localhost',          // Hostname (usually localhost for local development)
  database: 'your_database',  // Replace with your database name
  password: 'your_password',  // Replace with your PostgreSQL password
  port: 5432,                 // Default PostgreSQL port
});

const createTable = async () => {
  try {
    // Connect to the PostgreSQL server
    await client.connect();
    console.log('Connected to PostgreSQL');

    // SQL query to create the airports table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS airports (
        id SERIAL PRIMARY KEY,
        ident VARCHAR(255),
        type VARCHAR(255),
        name VARCHAR(255),
        latitude_deg DECIMAL(10, 6),
        longitude_deg DECIMAL(10, 6),
        elevation_ft INT,
        continent VARCHAR(2),
        iso_country VARCHAR(2),
        iso_region VARCHAR(10),
        municipality VARCHAR(255),
        scheduled_service VARCHAR(10),
        gps_code VARCHAR(10),
        iata_code VARCHAR(3),
        local_code VARCHAR(10),
        home_link TEXT,
        wikipedia_link TEXT,
        keywords TEXT
      );
    `;

    // Run the query to create the table
    await client.query(createTableQuery);
    console.log('airports table created successfully');
  } catch (err) {
    console.error('Error creating airports table:', err);
  } finally {
    // Close the database connection
    await client.end();
    console.log('Disconnected from PostgreSQL');
  }
};

// Call the function to create the table
createTable();
