'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locals', [{
      id: 1,
      name: '3',
      LocalTypeId: 1,
    },{
      id: 2,
      name: '6',
      LocalTypeId: 1,
    },{
      id: 3,
      name: '2',
      LocalTypeId: 1,
    },{
      id: 4,
      name: '10',
      LocalTypeId: 1,
    },{
      id: 5,
      name: 'A:1',
      LocalTypeId: 2,
    },{
      id: 6,
      name: 'A:2',
      LocalTypeId: 2,
    },{
      id: 7,
      name: 'A:3',
      LocalTypeId: 2,
    },{
      id: 8,
      name: 'Nord:1',
      LocalTypeId: 3,
    },{
      id: 9,
      name: 'Nord:2',
      LocalTypeId: 3,
    },{
      id: 10,
      name: 'Gyn 1',
      LocalTypeId: 4,
    },{
      id: 11,
      name: 'Kir 1',
      LocalTypeId: 4,
    },{
      id: 12,
      name: 'Uro 1',
      LocalTypeId: 4,
    },{
      id: 13,
      name: '101',
      LocalTypeId: 5,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locals');
  }
};
