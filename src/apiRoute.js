const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/fetch-notams', async (req, res) => {
  const url = 'https://external-api.faa.gov/notamapi/v1/notams?domesticLocation=ATL';
  const headers = {
    'client_id': API_ID,
    'client_secret': API_SECRET
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.status);
    console.log(response.headers);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching NOTAMs:', error);
    res.status(500).send('Failed to fetch NOTAMs');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
