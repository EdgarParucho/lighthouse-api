const { Sequelize, DataTypes, Model } = require('sequelize');
const HABIT_TABLE = 'habits';
const { USER_TABLE } = require('./userModel');

const habitSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(30),
    validate: {
      len: {
        args: [1, 30],
        msg: 'Habit name must have between 1 and 30 characters.'
      },
    }
  },
  userID: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onDelete: 'CASCADE',
    required: true,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  }
};

class Habit extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user', foreignKey: 'id' });
    this.hasMany(models.Record, { as: 'records', foreignKey: 'habitID' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HABIT_TABLE,
      modelName: 'Habit',
    }
  }
}

module.exports = { HABIT_TABLE, habitSchema, Habit};
