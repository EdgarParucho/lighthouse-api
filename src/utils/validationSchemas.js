const createHabitSchema = {
  name: {
    isMandatory: true,
    validations: [
      (value) => typeof value == 'string',
      (value) => value.length > 0 && value.length <= 30,
    ],
  },
  date: {
    isMandatory: false,
    validations: [
      (value) => typeof value == 'string',
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
    ],
  },
};

module.exports = {
  createHabitSchema,
};
