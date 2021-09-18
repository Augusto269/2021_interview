const express = require('express');
const route = express();
const buildingController = require('../controller/building.controller');
const buildingValidator = require('../validator/building.validator');
const authController = require('../../auth/controller/auth.controller');

/**
 * @api {post} /building Create New Building
 * @apiGroup Building
 * @apiName New Building
 * @apiParam {string}  address Address of the building
 * @apiParam {string}  name Name of the Building
 * @apiParam {string}  CUIT Cuit Associated to the builindg
 * @apiParam {string}  locality  City of the building
 * @apiParam {string}  province Province of the building
 * @apiParam {string}  observations Observations of the building
 * @apiParam {bool}  minute_book Minute Book of the Building
 * @apiParam {bool}  initialed_minute_book Minute Book of the Building
 * @apiParam {bool}  Sign_book Sing Book of the Building
 * @apiParam {bool}  initialed_sing_book Sing Book of the Building
 * @apiSuccess {200} Errrocode:2020 message: succefull Result: Token.
 * @apiError {400} Errorcode:4108  message: error
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */

route.post(
  '/',
  authController.securityMiddleware,
  authController.administratorAuth,
  buildingValidator.buildingValidationData,
  buildingController.createBuilding,
);

module.exports = route;
