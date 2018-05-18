'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id:1,
        username: 'nisse',
        password: 'nissep'
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users');
  }
};
