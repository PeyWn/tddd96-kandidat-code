'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procedure_local', [{
      LocalId: 1,
      ProcedureKvåCode: 'LCD00'
    },{
      LocalId: 2,
      ProcedureKvåCode: 'KEC01'
    },{
      LocalId: 2,
      ProcedureKvåCode: 'KED22'
    },{
      LocalId: 2,
      ProcedureKvåCode: 'KAC00'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'JKA20'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'UJD02'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'JMA10'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'JJB30'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'JEA00'
    },{
      LocalId: 3,
      ProcedureKvåCode: 'BAA60'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'JKA20'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'UJD02'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'JMA10'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'JJB30'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'JEA00'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'BAA60'
    },{
      LocalId: 4,
      ProcedureKvåCode: 'LCD00'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('procedure_local');
  }
};
