const { getWeatherCity, getAllCities } = require('../service/weather.service');

exports.getData = async function (req, res) {
  try {
    const city = res.locals.city;
    const apiResponse = await getWeatherCity(city);
    const response = [];
    if (!apiResponse) res.status(404).send({ message: 'City not found' });
    response.push(apiResponse[1]);
    response.push(apiResponse[9]);
    response.push(apiResponse[17]);
    response.push(apiResponse[25]);
    response.push(apiResponse[33]);
    res.status(200).send(response);
  } catch (err) {
    if (err.response.status === 404)
      res.status(404).send({ message: 'City not found' });

    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.getCities = async function (req, res) {
  try {
    const cities = req.params.city;
    const response = await getAllCities(cities);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
