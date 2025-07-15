const { Sequelize, DataTypes, Model } = require('sequelize');
const RECORD_TABLE = 'records';
const { HABIT_TABLE } = require('./habitModel');

const recordSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  note: {
    type: DataTypes.STRING(2000),
  },
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  userID: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING,
    required: true,
  },
  habitID: {
    field: 'habit_id',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: HABIT_TABLE,
      key: 'id',
    },
    onDelete: 'CASCADE',
    required: true,
  },
};

class Record extends Model {
  static associate(models) {
    this.belongsTo(models.Habit, { as: 'habit', foreignKey: 'id' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_TABLE,
      modelName: 'Record',
      timeStamps: false,
      createdAt: false,
      updatedAt: false,
    }
  }
}

module.exports = { RECORD_TABLE, recordSchema, Record };
