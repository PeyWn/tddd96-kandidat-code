'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DecisionProcedures', [{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 1,
      ProcedureKvåCode: 'JJB30'
    },{
      procedureOrder: 2,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 1,
      ProcedureKvåCode: 'JLA20'
    },{
      procedureOrder: 3,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 1,
      ProcedureKvåCode: 'PJD98'
    },{
      procedureOrder: 4,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 1,
      ProcedureKvåCode: 'JFB40'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 2,
      ProcedureKvåCode: 'JEA00'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 3,
      ProcedureKvåCode: 'KEC01'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 4,
      ProcedureKvåCode: 'BAA60'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 5,
      ProcedureKvåCode: 'LCD00'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 6,
      ProcedureKvåCode: 'JMW97'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 7,
      ProcedureKvåCode: 'JKA20'
    },{
      procedureOrder: 2,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 7,
      ProcedureKvåCode: 'TJK00'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 8,
      ProcedureKvåCode: 'KED22'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 9,
      ProcedureKvåCode: 'UJD02'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 10,
      ProcedureKvåCode: 'JJB30'
    },{
      procedureOrder: 2,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 10,
      ProcedureKvåCode: 'JLA20'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 11,
      ProcedureKvåCode: 'JEA00'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 12,
      ProcedureKvåCode: 'KEC01'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 13,
      ProcedureKvåCode: 'LCD00'
    },{
      procedureOrder: 2,
      side: 'Höger',
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 13,
      ProcedureKvåCode: 'LAF00'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 14,
      ProcedureKvåCode: 'BAA60'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 15,
      ProcedureKvåCode: 'KED22'
    },{
      procedureOrder: 1,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 16,
      ProcedureKvåCode: 'JKA20'
    },{
      procedureOrder: 2,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 16,
      ProcedureKvåCode: 'TJK00'
    },{
      procedureOrder: 1,
      side: 'Höger',
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 17,
      ProcedureKvåCode: 'KAC00'
    },{
      procedureOrder: 2,
      side: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      DecisionId: 17,
      ProcedureKvåCode: 'PHE30'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DecisionProcedures');
  }
};
