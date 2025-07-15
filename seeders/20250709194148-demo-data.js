'use strict';

const demoUserID = require('../src/config/auth').demoUser

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('habits', [
      { id: 'e90780b3-a464-464b-9073-82ead2dc3dcd',
        name: 'Studying',
        user_id: demoUserID,
        createdAt: '2025-07-01 04:00:01+00'
      },
      { id: 'e90780b3-a464-464b-9073-82ead2dc3dce',
        name: 'Training',
        user_id: demoUserID,
        createdAt: '2025-07-01 04:00:01+00'
      },
      { id: 'e90780b3-a464-464b-9073-82ead2dc3ece',
        name: 'Reading',
        user_id: demoUserID,
        createdAt: '2025-07-01 04:00:01+00'
      },
      { id: 'e90780b3-a464-464b-9073-82ead2dc1ece',
        name: 'Meditating',
        user_id: demoUserID,
        createdAt: '2025-07-01 04:00:01+00'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { id: demoUserID }, {});
    await queryInterface.bulkDelete('funds', { user_id: demoUserID }, {});
    await queryInterface.bulkDelete('records', { user_id: demoUserID }, {});
  }
};
