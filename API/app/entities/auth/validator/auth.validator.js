const commonsController = require('../../commons/controller/commons.controller');

exports.authValidation = async (req, res, next) => {
  try {
    let validation = [];
    var body = req.body;
    const makeLogin = {
      user: body.user,
      pass: body.pass,
      language: body.language,
    };
    if (validation.length == 0) {
      res.locals.makeLogin = makeLogin;
      next();
    } else {
      let errorCode = 412;
      commonsController.error_msg(errorCode, 'en').then(result => {
        res.status(412).send({
          errorcode: errorCode,
          message: result.message,
          result: [],
          details: validation,
        });
      });
    }
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, 'err');
    commonsController.error_msg(errorCode, 'en').then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: '',
        details: '',
      });
    });
  }
};
