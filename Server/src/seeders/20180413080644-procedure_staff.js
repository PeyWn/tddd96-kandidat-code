'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procedure_staff', [{
      StaffId: 1,
      ProcedureKvåCode: 'JJB30'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'JEA00'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'BAA60'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'JMA10'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'JKA20'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'UJD02'
    },{
      StaffId: 1,
      ProcedureKvåCode: 'KAC00'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'JJB30'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'JEA00'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'BAA60'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'JMA10'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'JKA20'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'UJD02'
    },{
      StaffId: 2,
      ProcedureKvåCode: 'KAC00'
    },{
      StaffId: 3,
      ProcedureKvåCode: 'LCD00'
    },{
      StaffId: 4,
      ProcedureKvåCode: 'KEC01'
    },{
      StaffId: 4,
      ProcedureKvåCode: 'KED22'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('procedure_staff');
  }
};
