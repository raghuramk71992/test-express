// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Azure App Service!');
});

// Define port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
