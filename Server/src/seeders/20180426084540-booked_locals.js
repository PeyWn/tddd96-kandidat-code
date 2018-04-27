'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Booked_locals', [{
        BookingId: 1,
        start_time: new Date('April 30, 2018 08:00:00'),
        end_time: new Date('April 30, 2018 10:00:00'),
        LocalId: 1
      }, {
        BookingId: 1,
        start_time: new Date('April 30, 2018 09:00:00'),
        end_time: new Date('April 30, 2018 11:00:00'),
        LocalId: 3
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Booked_locals');
  }
};
