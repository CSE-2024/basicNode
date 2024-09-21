const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export the app for testing