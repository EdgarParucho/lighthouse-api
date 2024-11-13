'use strict';
const { HABIT_TABLE } = require('../models/habitModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(HABIT_TABLE, 'habits_name_key');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint(HABIT_TABLE, ['name'], {
      unique: true,
      name: 'habits_name_key'
    });
  }
};
