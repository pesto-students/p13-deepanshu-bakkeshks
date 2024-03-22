const weatherService = require('../services/weatherService');

const getWeatherByCities = async (req, res) => {
  try {
    // Retrieve weather data of multiple cities
    const cities = req.query.cities; // Get cities from query params
    if (!cities) {
      return res.status(400).json({ error: 'Cities parameter is required' });
    }
    
    const citiesArray = cities.split(','); // Split cities string into an array
    const weatherData = await Promise.all(citiesArray.map(city => weatherService.getWeatherByCityName(city)));
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getWeatherForecast = async (req, res) => {
  try {
    // Retrieve detailed forecast for a specified number of days
    const days = req.query.days; // Get days from query params
    if (!days) {
      return res.status(400).json({ error: 'Days parameter is required' });
    }
    
    // Implement logic to fetch forecast data for specified number of days
    const forecastData = await weatherService.getWeatherForecast(days);
    res.status(200).json(forecastData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const filterWeatherData = async (req, res) => {
  try {
    // Implement logic to filter weather data by city, date, and moment
    const { city, date, moment } = req.query;
    if (!city || !date || !moment) {
      return res.status(400).json({ error: 'City, date, and moment parameters are required' });
    }

    // Implement logic to fetch filtered weather data
    const filteredData = await weatherService.filterWeatherData(city, date, moment);
    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCurrentWeatherByCity = async (req, res) => {
  try {
    const cityName = req.params.cityName;
    const weatherData = await weatherService.getWeatherByCityName(cityName);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getWeatherByCities,
  getWeatherForecast,
  filterWeatherData,
  getCurrentWeatherByCity
};
