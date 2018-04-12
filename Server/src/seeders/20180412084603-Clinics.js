'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clinics', [{
      id: 1,
      name: 'Kirugiska kliniken',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Urologiska kliniken',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Gynekologiska kliniken',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clinics');
  }
};
