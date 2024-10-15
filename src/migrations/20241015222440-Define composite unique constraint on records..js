'use strict';

const { RECORD_TABLE } = require('../models/recordModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(RECORD_TABLE, ['date', 'user_id', 'habit_id'], {
      unique: true,
      name: 'daily_habit_record_constraint'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(RECORD_TABLE, 'daily_habit_record_constraint');
  }
};
