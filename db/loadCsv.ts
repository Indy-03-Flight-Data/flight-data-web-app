import { Client } from 'pg';
import fs from 'fs';
import path from 'path';

// Create a PostgreSQL client
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'flight_data',
  password: 'Coral',
  port: 5432,
});

const loadCsvToDatabase = async () => {
  try {
    await client.connect();

    const csvFilePath = path.join(__dirname, '../data/airports.csv');
    
    const query = `
      COPY airports(name, city, state, iata_code, icao_code, latitude, longitude)
      FROM '${csvFilePath}'
      DELIMITER ','
      CSV HEADER;
    `;

    await client.query(query);
    console.log('Data loaded successfully');
  } catch (err) {
    console.error('Error loading CSV to database:', err);
  } finally {
    await client.end();
  }
};

loadCsvToDatabase();
