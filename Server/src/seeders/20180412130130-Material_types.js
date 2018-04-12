'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Material_types', [{
      id: 1,
      name: 'Container',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Utrustning',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Extrainstrument',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      name: 'Engångsmaterial',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      name: 'Material',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Material_types');
  }
};
