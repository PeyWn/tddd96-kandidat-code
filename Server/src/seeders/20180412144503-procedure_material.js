'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procedure_material', [{
      MaterialId: 1,
      ProcedureKvåCode: 'JEA00'
    },{
      MaterialId: 2,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 3,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 4,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 5,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 6,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 7,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 8,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 9,
      ProcedureKvåCode: 'KEC01'
    },{
      MaterialId: 10,
      ProcedureKvåCode: 'LCD00'
    },{
      MaterialId: 11,
      ProcedureKvåCode: 'LCD00'
    },{
      MaterialId: 12,
      ProcedureKvåCode: 'LCD00'
    },{
      MaterialId: 13,
      ProcedureKvåCode: 'LCD00'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'LCD00'
    },{
      MaterialId: 15,
      ProcedureKvåCode: 'BAA60'
    },{
      MaterialId: 16,
      ProcedureKvåCode: 'BAA60'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'BAA60'
    },{
      MaterialId: 17,
      ProcedureKvåCode: 'BAA60'
    },{
      MaterialId: 18,
      ProcedureKvåCode: 'KED22'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'KED22'
    },{
      MaterialId: 19,
      ProcedureKvåCode: 'KED22'
    },{
      MaterialId: 20,
      ProcedureKvåCode: 'JMA10'
    },{
      MaterialId: 21,
      ProcedureKvåCode: 'JMA10'
    },{
      MaterialId: 22,
      ProcedureKvåCode: 'JMA10'
    },{
      MaterialId: 23,
      ProcedureKvåCode: 'JMA10'
    },{
      MaterialId: 24,
      ProcedureKvåCode: 'JMA10'
    },{
      MaterialId: 25,
      ProcedureKvåCode: 'UJD02'
    },{
      MaterialId: 26,
      ProcedureKvåCode: 'UJD02'
    },{
      MaterialId: 27,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 28,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 29,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 18,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 30,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 31,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 32,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 33,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 34,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 35,
      ProcedureKvåCode: 'KAC00'
    },{
      MaterialId: 36,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 37,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 22,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 38,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 39,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 40,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 41,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 42,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 43,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 44,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 45,
      ProcedureKvåCode: 'JJB30'
    },{
      MaterialId: 40,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 39,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 36,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 22,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 37,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 38,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 46,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 47,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 48,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 14,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 49,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 50,
      ProcedureKvåCode: 'JKA20'
    },{
      MaterialId: 51,
      ProcedureKvåCode: 'JKA20'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('procedure_material');
  }
};
