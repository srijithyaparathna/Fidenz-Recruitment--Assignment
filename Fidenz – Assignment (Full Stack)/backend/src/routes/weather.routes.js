const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../services/weather.service');
const checkJwt = require('../middleware/auth.middleware');

// GET /api/weather
router.get('/',checkJwt, async (req, res) => {
  try {
    const data = await getWeatherData();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get weather data' });
  }
});

module.exports = router;
