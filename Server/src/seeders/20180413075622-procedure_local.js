'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procedure_local', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 1,
      ProcedureKvåCode: 'LCD00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 2,
      ProcedureKvåCode: 'KEC01'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 2,
      ProcedureKvåCode: 'KED22'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 2,
      ProcedureKvåCode: 'KAC00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'JKA20'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'UJD02'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'JMA10'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'JJB30'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'JEA00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 3,
      ProcedureKvåCode: 'BAA60'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'JKA20'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'UJD02'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'JMA10'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'JJB30'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'JEA00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'BAA60'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      LocalId: 4,
      ProcedureKvåCode: 'LCD00'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('procedure_local');
  }
};
