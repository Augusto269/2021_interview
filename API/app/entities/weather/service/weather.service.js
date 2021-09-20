const axios = require('axios');
const apikey = 'b16f68d8af3d916b90aac05a5065c9ed';
const apiBasUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';

exports.getWeatherCity = async city => {
  try {
    const response = await axios.get(`${apiBasUrl}${city}&appid=${apikey}`);
    return response.data.list;
  } catch (e) {
    throw e;
  }
};

exports.getAllCities = async word => {
  const results = [];
  const { cities } = require('./city');
  cities.forEach(city => {
    if (city.name.toLowerCase().search(word.toLowerCase()) !== -1) results.push(city);
  });
  return results
};
