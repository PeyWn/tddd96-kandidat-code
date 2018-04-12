'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Local_types', [{
        id: 1,
        description: 'Operationssal',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        description: 'Postoperativ vårdplats',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 3,
        description: 'Preoperativ vårdplats'
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 4,
        description: 'Plats på vårdavdelning',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        description: 'Plats på intesivvårdsavdelning',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Local_types');
  }
};
