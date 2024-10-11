const sequelize = require('../dataAccess/sequelize');
const { User } = sequelize.models;

const authenticate = (id) => new Promise((resolve, reject) => User.findOrCreate({
  where: { id },
  include: ['habits', 'records'],
  raw: true,
})
  .then(([user, created]) => resolve({
    statusCode: created ? 201 : 200,
    data: user,
  }))
  .catch((error) => reject(error))
);

module.exports = {
  authenticate,
}