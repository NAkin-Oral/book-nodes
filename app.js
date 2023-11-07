// Import required modules and configure your Express app
require('colors');
const express = require('express');
const logger = require('morgan');
const { connectDB } = require('./db');
const models = require('./models/book');

// Configuration
const app = express();
const port = 3000;

// connect to DB
connectDB();

// Parse request
app.use(express.json());
app.use(logger('dev'));

// import routers
app.use(require('./routes/books'));

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
