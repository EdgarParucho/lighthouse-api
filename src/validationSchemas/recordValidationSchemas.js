const { isValidDate } = require("../utils/dateUtils");
const { isUUIDv4 } = require("../utils/UUIDv4Validator");

const createRecordSchema = {
  habitID: {
    mandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => isUUIDv4(value),
    ],
  },
  note: {
    mandatory: false,
    validations: [
      (value) => value == null || typeof value == 'string',
      (value) => value == null || (value.length >= 0 && value.length <= 2000),
    ],
  },
  date: {
    mandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => isValidDate(value),
    ],
  },
};

const updateRecordSchema = {
  habitID: {
    mandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => isUUIDv4(value),
    ],
  },
  note: {
    mandatory: false,
    validations: [
      (value) => value == null || typeof value == 'string',
      (value) => value == null || (value.length >= 0 && value.length <= 2000),
    ],
  },
  date: {
    mandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => isValidDate(value),
    ],
  },
};

const getRecordSchema = {
  from: {
    mandatory: true,
    validations: [
      (value) => typeof value =='string',
      (value) => isValidDate(value),
    ]
  },
  to: {
    mandatory: true,
    validations: [
      (value) => typeof value =='string',
      (value) => isValidDate(value),
    ]
  }
};

module.exports = {
  createRecordSchema,
  updateRecordSchema,
  getRecordSchema,
};
