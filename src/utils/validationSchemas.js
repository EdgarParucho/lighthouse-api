const createHabitSchema = {
  name: {
    isMandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => value.length > 0 && value.length <= 30,
    ],
  },
};

module.exports = {
  createHabitSchema,
};
