const dataManager = require('../../../utils/datamanger');

exports.getLogin = function (login) {
  let whereClause = {};
  if (login.user) {
    whereClause['email'] = login.user;
  }
  return dataManager.user
    .findOne({
      where: whereClause,
    })
    .then(result => {
      if (result) {
        return result.dataValues;
      } else {
        return false;
      }
    });
};
