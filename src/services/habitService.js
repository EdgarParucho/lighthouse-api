const sequelize = require('../dataAccess/sequelize');
const { Habit } = sequelize.models;

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values)
  .then(({ id, name, createdAt }) => resolve({
    statusCode: 201,
    id,
    name,
    createdAt,
  }))
  .catch((error) => reject(error))
)

module.exports = {
  CreateHabit,
}
