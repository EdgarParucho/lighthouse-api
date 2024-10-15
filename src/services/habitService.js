const sequelize = require('../dataAccess/sequelize');
const { Habit } = sequelize.models;

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values)
  .then(({ id, name, createdAt }) => resolve({ id, name, createdAt }))
  .catch((error) => reject(error))
);

const UpdateHabit = ({ userID, habitID: id, values }) => new Promise((resolve, reject) => {
  Habit.update(values, { where: { id, userID } })
    .then(() => resolve())
    .catch((error) => reject(error))
});

const DeleteHabit = ({ userID, habitID: id }) => new Promise((resolve, reject) => {
  Habit.destroy({ where: { userID, id } })
    .then(() => resolve())
    .catch((error) => reject(error))
});

module.exports = {
  CreateHabit,
  UpdateHabit,
  DeleteHabit,
};
