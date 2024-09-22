import { exec } from 'child_process';
import path from 'path';

const loadCsvToDatabase = () => {
  const csvFilePath = path.join(__dirname, '../data/airports.csv');
  console.log(`Loading CSV from path: ${csvFilePath}`);

  const copyCommand = `psql -U your_username -d your_database_name -c "\\copy airports(id, ident, type, name, latitude_deg, longitude_deg, elevation_ft, continent, iso_country, iso_region, municipality, scheduled_service, gps_code, iata_code, local_code, home_link, wikipedia_link, keywords) FROM '${csvFilePath}' DELIMITER ',' CSV HEADER"`;

  exec(copyCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('Error loading CSV to database:', error.message);
      return;
    }
    if (stderr) {
      console.error('stderr:', stderr);
      return;
    }
    console.log('stdout:', stdout);
  });
};

loadCsvToDatabase();
