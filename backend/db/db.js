const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

function connectToDb() {
  // MongoDB connection URL from environment variables
  const dbURI = process.env.DB_URI;

  // Connect to the MongoDB database
  mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
}

module.exports = connectToDb;
