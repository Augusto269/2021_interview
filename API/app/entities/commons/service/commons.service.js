const dataManager = require('../../../utils/datamanger');
const moment = require('moment');

exports.serviceCreateRegisterError = error => {
  error.createdat = moment();
  dataManager.error_debug.create(error);
};
