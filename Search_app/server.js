const express = require('express');
const mongoose = require('mongoose'); // Connector for MongoDB
const bodyParser = require('body-parser'); // Let us use requests

const items = require('./routes/api/items')

const app = express();

// Middleware for BodyParser
app.use(bodyParser.json());

// MongoDB config og connection
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Uses the routes from routes/api/items.js
app.use('/api/items', items);

const port = 5000; // Sets port for server

app.listen(port, () => console.log(`Server started on port ${port}`));
