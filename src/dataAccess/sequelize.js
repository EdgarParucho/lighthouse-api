const { Sequelize } = require('sequelize');
const { environment } = require('../config/server.js');
const database = require('../config/database.js')[environment];
const setupModels = require('../models/index.js');

const sequelize = new Sequelize({
  ...database,
  dialectModule: require('pg'),
  logging: environment === 'production' ? false : console.log,
});

setupModels(sequelize);

module.exports = sequelize;
