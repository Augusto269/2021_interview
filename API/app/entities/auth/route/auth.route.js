const express = require('express');
const route = express();
const authController = require('../controller/auth.controller');
const validationAuth = require('../validator/auth.validator');

/**
 * @api {get} /auth Login
 * @apiName User
 * @apiGroup Auth
 * @apiParam {string}  user Users Name
 * @apiParam {string}  pass Password User
 * @apiParam {string}  language used in the app
 * @apiSuccess {200} Errrocode:2000 message: succefull Result: Token.
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {412} Errorcode:412  detail: error of validation
 */
route.post('/', validationAuth.authValidation, authController.makeLogin);

module.exports = route;
