const { matchesEmailFormat } = require('../utils/emailValidator');
const { isValidPassword } = require('../utils/passwordValidator');

const updateAccountSchema = {
  email: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => matchesEmailFormat(value),
    ],
  },
  password: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => value.length >= 8,
      (value) => isValidPassword(value),
    ],
  },
};

module.exports = {
  updateAccountSchema,
};
