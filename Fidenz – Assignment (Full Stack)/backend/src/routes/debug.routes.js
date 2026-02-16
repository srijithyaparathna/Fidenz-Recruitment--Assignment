const express = require('express');
const router = express.Router();
const { cacheStatus } = require('../services/cache.service');
//const checkJwt = require('../middleware/auth.middleware');

// GET /api/debug/cache
router.get('/cache', (req, res) => {
  const status = cacheStatus('weatherData');
  res.json(status);
});

module.exports = router;
