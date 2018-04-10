'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Specialities', [{
      id: 1,
      description: 'Allmän kirurgi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      description: 'Gynekologi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      description: 'Urologi',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specialities');
  }
};
