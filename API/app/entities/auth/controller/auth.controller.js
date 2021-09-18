const commonsController = require('../../commons/controller/commons.controller');
const jwt = require('jwt-simple');
const dotenv = require('dotenv');
dotenv.config();

exports.makeLogin = async function (req, res) {
  try {
    res.status(200).send('Login test');
  } catch (err) {
    commonsController.createRegisterError(err, 'error');
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

/* Middlewares */
exports.securityMiddleware = function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({
        message: 'Headers Empty',
        result: '',
        details: '',
      });
    } else {
      var token = req.headers.authorization.replace(/['"]+/g, '');
      try {
        const payload = jwt.decode(token, process.env.SECRET_PASSWORD_TOKEN);
        let userData = {
          uuid: payload.uuid,
          profile: payload.profile,
        };
        res.locals.userData = userData;
        next();
      } catch (err) {
        //TODO:Hardcode
        return res.status(400).send({
          message: 'Invalid Token',
          result: '',
          details: '',
        });
      }
    }
  } catch (err) {
    commonsController.createRegisterError(err, '');
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
