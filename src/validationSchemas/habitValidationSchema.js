const { isValidDate } = require('../utils/dateValidator.js');

const createHabitSchema = {
  name: {
    isMandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => value.length > 0 && value.length <= 30,
    ],
  },
  createdAt: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => isValidDate(value),
    ],
  },
};

const updateHabitSchema = {
  name: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => value.length > 0 && value.length <= 30,
    ],
  },
  createdAt: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => isValidDate(value),
    ],
  },
};

module.exports = {
  createHabitSchema,
  updateHabitSchema,
};
