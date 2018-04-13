'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locals', [{
      id: 1,
      name: '3',
      LocalTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: '6',
      LocalTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: '2',
      LocalTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      name: '10',
      LocalTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      name: 'A:1',
      LocalTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      name: 'A:2',
      LocalTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      name: 'A:3',
      LocalTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      name: 'Nord:1',
      LocalTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      name: 'Nord:2',
      LocalTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      name: 'Gyn 1',
      LocalTypeId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 11,
      name: 'Kir 1',
      LocalTypeId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 12,
      name: 'Uro 1',
      LocalTypeId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 13,
      name: '101',
      LocalTypeId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
