const sequelize = require('../dataAccess/sequelize');
const { User, Habit } = sequelize.models;

function createUser(payload) {
  return new Promise((resolve, reject) => User.create(payload)
    .then(() => resolve(null))
    .catch((error) => reject(error.message)))
}

module.exports = {
  createUser,
}