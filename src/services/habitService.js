const sequelize = require('../dataAccess/sequelize');
const { Habit } = sequelize.models;

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values)
  .then((habit) => resolve({
    statusCode: 201,
    data: habit,
  }))
  .catch((error) => reject(error))
)

module.exports = {
  CreateHabit,
}
