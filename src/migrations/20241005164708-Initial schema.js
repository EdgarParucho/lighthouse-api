'use strict';

const { HABIT_TABLE, habitSchema } = require('../models/habitModel');
const { USER_TABLE, userSchema } = require('../models/userModel');
const { RECORD_TABLE, recordSchema } = require('../models/recordModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(HABIT_TABLE, habitSchema);
    await queryInterface.createTable(RECORD_TABLE, recordSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(RECORD_TABLE);
    await queryInterface.dropTable(HABIT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
