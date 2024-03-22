const axios = require('axios');
require('dotenv').config(); // Load environment variables

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

const getWeatherByCityName = async (cityName) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

module.exports = {
  getWeatherByCityName
};
