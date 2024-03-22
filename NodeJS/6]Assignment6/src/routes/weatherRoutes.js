const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Routes
router.get('/cities', weatherController.getWeatherByCities);
router.get('/forecast', weatherController.getWeatherForecast);
router.get('/filter', weatherController.filterWeatherData);
router.get('/current/:cityName', weatherController.getCurrentWeatherByCity);

module.exports = router;
