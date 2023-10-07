require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Access environment variables
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Serve the Google Maps API Key
app.get('/googlemapskey', (req, res) => {
    res.json({ key: GOOGLE_MAPS_API_KEY });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
