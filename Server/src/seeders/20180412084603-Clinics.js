'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clinics', [{
      id: 1,
      name: 'Kirugiska kliniken',
    },{
      id: 2,
      name: 'Urologiska kliniken',
    },{
      id: 3,
      name: 'Gynekologiska kliniken',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clinics');
  }
};
