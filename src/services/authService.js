const sequelize = require('../dataAccess/sequelize');
const { User } = sequelize.models;

async function authenticate(userID) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { id: userID },
      include: ['habits', 'records'],
      raw: true,
    });
    return {
      statusCode: created ? 201 : 200,
      message: created ? 'User created.' : 'Data loaded.',
      data: user,
    };
  } catch(error) {
    throw error;
  }
    
}

module.exports = {
  authenticate,
}