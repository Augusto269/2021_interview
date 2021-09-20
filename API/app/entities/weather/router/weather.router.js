const express = require('express');
const route = express();
const weatherController = require('../controller/weather.controller');
const weatherValidation = require('../validation/weather.validation')

/**
 * @api {get} /weather Login
 * @apiName Weather
 * @apiGroup Get Weather of the city
 * @apiParam {string}  city City Id String
 * @apiSuccess {200} Response
 * @apiError {400} Error
 * @apiError {412} Validation Error
 * @apiError {500} Error

 */
route.get('/:city', weatherValidation.cityValidation,  weatherController.getData);

/**
 * @api {get} /weather Login
 * @apiName Weather
 * @apiGroup Get All City
 * @apiSuccess {200} Response
 * @apiError {400} Error
 * @apiError {412} Validation Error
 * @apiError {500} Error

 */
 route.get('/allCities/:city', weatherController.getCities);

module.exports = route;