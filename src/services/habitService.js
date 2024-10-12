const sequelize = require('../dataAccess/sequelize');
const { Habit } = sequelize.models;

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values, { fields: ['user_id', 'name'] })
  .then(({ id, createdAt }) => resolve({
    statusCode: 201,
    id,
    createdAt,
  }))
  .catch((error) => reject(error))
)

module.exports = {
  CreateHabit,
}
