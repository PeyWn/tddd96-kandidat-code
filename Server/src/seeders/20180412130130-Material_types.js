'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Material_types', [{
      id: 1,
      name: 'Container',
    },{
      id: 2,
      name: 'Utrustning',
    },{
      id: 3,
      name: 'Extrainstrument',
    },{
      id: 4,
      name: 'Engångsmaterial',
    },{
      id: 5,
      name: 'Material',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Material_types');
  }
};
