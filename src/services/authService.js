const sequelize = require('../dataAccess/sequelize');
const { User, Habit, Record } = sequelize.models;

const authenticate = (id) => new Promise((resolve, reject) => User.findOrCreate({
  where: { id },
  include: [
    { model: Habit, as: 'habits', attributes: { exclude: 'userID' } },
    { model: Record, as: 'records', attributes: { exclude: 'userID' } },
  ],
  attributes: { exclude: 'id' },
})
  .then(([user, created]) => resolve({
    statusCode: created ? 201 : 200,
    data: user.dataValues,
  }))
  .catch((error) => reject(error))
);

module.exports = {
  authenticate,
}