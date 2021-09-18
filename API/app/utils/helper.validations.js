/* eslint-disable no-useless-escape */

const commonsServices = require('../commons/service/commons.service');
const moment = require('moment');

exports.validationSizeOfFile = async (file, validation, field, language) => {
  let fileSizeMax = 1024 * 1024 * 3;
  if (file) {
    if (file.size < fileSizeMax) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(37, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
exports.validationTypeOfFile = async (file, validation, field, language) => {
  if (file) {
    if (
      file.mimetype == 'application/pdf' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(36, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
exports.validateDate = async (date, validation, field, language) => {
  if (date) {
    if (moment(date).isValid()) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(19, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.validationLanguage = async (string, length, validation, field) => {
  if (string.length >= length) {
    if (string !== 'es' && string !== 'en') {
      let errorMsg = await commonsServices.getValidationError(3, 'en');
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    } else {
      return validation;
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(3, 'en');
    let newError = {
      field: field,
      error: `${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
exports.validationPassword = async (string, validation, field, language) => {
  var strongRegex = new RegExp(
    '^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@.$%^&*\\-_]).{8,}$',
  );
  if (strongRegex.test(string)) {
    return validation;
  }
  let errorMsg = await commonsServices.getValidationError(15, language);
  let newError = {
    field: field,
    error: `${errorMsg.message}`,
  };
  return validation.push(newError);
};

exports.validationStringLenght = async (
  string,
  max,
  min,
  validation,
  field,
  language,
  errorValidation,
) => {
  if (string) {
    if (string.length <= max && string.length >= min) {
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
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
exports.validationUUID = async (string, validation, field, language) => {
  var strongRegex = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );
  if (strongRegex.test(string)) {
    return validation;
  } else {
    let errorMsg = await commonsServices.getValidationError(9, language);
    let newError = {
      field: field,
      error: `${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.validationNumber = async (
  number,
  max,
  min,
  validation,
  field,
  language,
  errorValidation,
) => {
  if (number) {
    if (number <= max && number >= min) {
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
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
exports.validationEmail = async (email, validation, field, language) => {
  var emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  if (email) {
    if (emailReg.test(email)) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(14, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.validationTrueOrFalse = async (text, validation, field, language) => {
  let string = text.toString();
  if (string.length > 0) {
    if (string.length == 4 || string.length == 5) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(27, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.validationTime = async (time, validation, field, language) => {
  var timeReg = new RegExp(/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/);
  if (time) {
    if (timeReg.test(time)) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(29, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};

exports.validationStatus = async (status, validation, field, language) => {
  if (status) {
    if (
      status == 'Approved' ||
      status == 'Disapproved' ||
      status == 'InReview'
    ) {
      return validation;
    } else {
      let errorMsg = await commonsServices.getValidationError(33, language);
      let newError = {
        field: field,
        error: `${errorMsg.message}`,
      };
      return validation.push(newError);
    }
  } else {
    let errorMsg = await commonsServices.getValidationError(9999, language);
    let newError = {
      field: field,
      error: `${field} ${errorMsg.message}`,
    };
    return validation.push(newError);
  }
};
