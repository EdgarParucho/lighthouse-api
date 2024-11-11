const sequelize = require('../dataAccess/sequelize');
const { Habit, Record } = sequelize.models;
const { Op, ValidationError } = require('sequelize');

const CreateHabit = (values) => new Promise((resolve, reject) => Habit.create(values)
  .then(({ id, name, createdAt }) => resolve({ id, name, createdAt }))
  .catch((error) => reject(error))
);

const UpdateHabit = async ({ userID, habitID: id, values }) => {
  try {
    if (values.createdAt) await validateDate(id, values.createdAt)
    await Habit.update(values, { where: { id, userID } })
    return
  } catch (error) {
    throw error
  }
};

const DeleteHabit = ({ userID, habitID: id }) => new Promise((resolve, reject) => {
  Habit.destroy({ where: { userID, id } })
    .then(() => resolve())
    .catch((error) => reject(error))
});

function validateDate(id, date) {
  return Record.findOne({
    where: {
      habitID: id,
      date: { [Op.lt]: date }
    }
  })
    .then((olderRecord) => {
      if (olderRecord) throw new ValidationError('At least one record is older than the edited.')
      else console.log(olderRecord)
    })
}

module.exports = {
  CreateHabit,
  UpdateHabit,
  DeleteHabit,
};
