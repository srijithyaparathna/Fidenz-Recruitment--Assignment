// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const weatherRoutes = require('./routes/weather.routes');
const debugRoutes = require('./routes/debug.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/weather', weatherRoutes);
app.use('/api/debug', debugRoutes);

app.get('/', (req, res) => res.send('Weather Analytics Backend Running'));

module.exports = app;
