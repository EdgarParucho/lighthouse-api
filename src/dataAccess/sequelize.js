const { Sequelize } = require('sequelize');
const { User, userSchema } = require('../models/userModel');
const { Habit, habitSchema } = require('../models/habitModel');
const { Record, recordSchema } = require('../models/recordModel');
const { url, ...options } = require('../config/database.js');

const sequelize = new Sequelize(url, {
  dialectModule: require('pg'),
  ...options,
});

User.init(userSchema, User.config(sequelize));
Record.init(recordSchema, Record.config(sequelize));
Habit.init(habitSchema, Habit.config(sequelize));
User.associate(sequelize.models);
Habit.associate(sequelize.models);
Record.associate(sequelize.models);


module.exports = sequelize;
