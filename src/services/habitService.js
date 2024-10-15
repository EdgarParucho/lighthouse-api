const sequelize = require('../dataAccess/sequelize');
const { Habit } = sequelize.models;

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values)
  .then(({ id, name, createdAt }) => resolve({ id, name, createdAt }))
  .catch((error) => reject(error))
);

const updateHabit = ({ habitID: id, userID, values }) => new Promise((resolve, reject) => {
  Habit.update(values, { where: { id, userID } })
    .then(() => resolve())
    .catch((error) => reject(error))
});

module.exports = {
  CreateHabit,
  updateHabit,
}
