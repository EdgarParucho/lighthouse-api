const { User, userSchema } = require('./userModel');
const { Habit, habitSchema } = require('./habitModel');
const { Record, recordSchema } = require('./recordModel');

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Record.init(
    recordSchema,
    {
      ...Record.config(sequelize),
      indexes: [{ unique: true, fields: ['date', 'habitID', 'userID'] }]
    });
  Habit.init(habitSchema, Habit.config(sequelize));
  User.associate(sequelize.models);
  Habit.associate(sequelize.models);
  Record.associate(sequelize.models);
}

module.exports = setupModels;
