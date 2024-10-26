const sequelize = require('../dataAccess/sequelize');
const { Op } = require('sequelize');
const { User, Habit, Record } = sequelize.models;
const { firstOfMonth } = require('../utils/dateUtils')

const start = (id) => new Promise((resolve, reject) => User.findOrCreate({
  where: { id },
  include: [
    {
      model: Habit,
      as: 'habits',
      attributes: { exclude: 'userID' }
    },
    {
      model: Record,
      as: 'records',
      attributes: { exclude: 'userID' },
      where: { date: { [Op.gte]: firstOfMonth() } },
    },
  ],
  order: [[{ model: Record, as: 'records' }, 'date', 'DESC']],
  attributes: { exclude: 'id' },
})
  .then(([user, created]) => resolve({
    created,
    habits: user.dataValues.habits,
    records: user.dataValues.records,
  }))
  .catch((error) => reject(error))
);

module.exports = {
  start,
}