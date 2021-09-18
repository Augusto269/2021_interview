const commonsServices = require('../service/commons.service');

exports.validationStringLenght = async (
  string,
  length,
  validation,
  field,
  language,
  errorValidation,
) => {
  if (string.length <= length) {
    return validation;
  } else {
    let errorMsg = await commonsServices.getValidationError(
      errorValidation,
      language,
    );
    let newError = {
      field: field,
      error: `${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.cleanFilesExtension = fileData => {
  fileData = fileData.replace(/^data:image\/jpeg;base64,/, '');
  fileData = fileData.replace(/^data:image\/jpg;base64,/, '');
  fileData = fileData.replace(/^data:application\/pdf;base64,/, '');
  fileData = fileData.replace(/^data:image\/png;base64,/, '');
  return fileData;
};

exports.createRegisterError = function (error, uuid) {
  let errorDebug;
  if (error.parent) {
    errorDebug = {
      code: error.parent.code,
      errno: error.parent.errno,
      sqlState: error.parent.sqlState,
      sqlmessage: error.parent.sqlMessage,
      sql: error.parent.sql,
      parameters: error.parent.parameters
        ? error.parent.parameters.toString()
        : false,
      createduser: uuid,
    };
  } else {
    errorDebug = {
      code: '500',
      errno: '500',
      sqlState: null,
      sqlmessage: 'Error NODEJS',
      sql: error.message,
      parameters: error.stack,
      createduser: uuid,
    };
  }
  commonsServices.serviceCreateRegisterError(errorDebug);
};

exports.error_msg = function (error_code, language) {
  return commonsServices
    .getErrorMsg(error_code, language)
    .then(result => {
      return result;
    })
    .catch(() => {
      return null;
    });
};

exports.cleanWhitSpace = function (str) {
  str = str.replace(/ /g, '');
  return str;
};

exports.normalizeString = function (str) {
  var map = {
    '-': '_',
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  };

  str = str.toLowerCase();

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  }

  return str;
};
