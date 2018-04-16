'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Specialities', [{
      id: 1,
      description: 'Allmän kirurgi',
    },{
      id: 2,
      description: 'Gynekologi',
    },{
      id: 3,
      description: 'Urologi',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specialities');
  }
};
