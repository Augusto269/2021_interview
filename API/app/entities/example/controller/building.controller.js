const buildingService = require('../service/building.service');
const commonsController = require('../../commons/controller/commons.controller');
const dotenv = require('dotenv');
dotenv.config();

exports.getAllBuildingProviders = function (req, res) {
  try {
    let uuidBuilding = res.locals.uuidBuilding;
    buildingService
      .getAllBuildingProviders(uuidBuilding)
      .then(allProviders => {
        let errorCode = 200;
        commonsController.error_msg(errorCode, 'error').then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: allProviders,
          });
        });
      })
      .catch(err => {
        let errorCode = 500;
        commonsController.createRegisterError(err, 'error');
        commonsController.error_msg(errorCode, 'error').then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: [],
          });
        });
      });
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, 'error');
    commonsController.error_msg(errorCode, 'error').then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        details: [],
        result: [],
      });
    });
  }
};
