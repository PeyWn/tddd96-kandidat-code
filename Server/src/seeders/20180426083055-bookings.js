'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [{
        id: 1,
        preliminary: false,
        updatedAt: new Date(),
        createdAt: new Date(),
        DecisionId: 1,
        UserId: 1,
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings');
  }
};
