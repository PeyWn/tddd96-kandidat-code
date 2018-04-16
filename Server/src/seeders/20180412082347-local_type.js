'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Local_types', [{
        id: 1,
        description: 'Operationssal',
      },{
        id: 2,
        description: 'Postoperativ vårdplats',
      },{
        id: 3,
        description: 'Preoperativ vårdplats',
      },{
        id: 4,
        description: 'Plats på vårdavdelning',
      },{
        id: 5,
        description: 'Plats på intesivvårdsavdelning',
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Local_types');
  }
};
