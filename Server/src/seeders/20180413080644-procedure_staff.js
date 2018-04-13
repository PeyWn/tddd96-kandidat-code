'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procedure_staff', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'JJB30'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'JEA00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'BAA60'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'JMA10'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'JKA20'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'UJD02'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 1,
      ProcedureKvåCode: 'KAC00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'JJB30'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'JEA00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'BAA60'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'JMA10'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'JKA20'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'UJD02'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 2,
      ProcedureKvåCode: 'KAC00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 3,
      ProcedureKvåCode: 'LCD00'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 4,
      ProcedureKvåCode: 'KEC01'
    },{
      createdAt: new Date(),
      updatedAt: new Date(),
      StaffId: 4,
      ProcedureKvåCode: 'KED22'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('procedure_staff');
  }
};
