const isUUIDv4 = require('../utils/UUIDv4Validator.js')

const idSchema = {
  id: {
    mandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => isUUIDv4(value),
    ],
  },
};

module.exports = idSchema;
