const validRegEx = /^[^\\/&]*$/

exports.cityValidation = async (req, res, next) => {
  try {
      const city = req.params.city;
      if(!city || typeof city !== 'string' || city.match(validRegEx) ){
          res.locals.city = city ;
          next()
      }else {
        res.status(412).send({
            message: 'The city is not correct',
          });
      }
  } catch (err) {
    res.status(500).send({
        message: 'Internal server eeror',
      });
  }
};
