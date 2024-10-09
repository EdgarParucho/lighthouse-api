const { Sequelize } = require('sequelize');
const { url, ...options } = require('../config/database.js');
const setupModels = require('../models/index.js');

const sequelize = new Sequelize(url, {
  dialectModule: require('pg'),
  ...options,
});

setupModels(sequelize);

module.exports = sequelize;
