'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Procedures', [{
      kvåCode: 'JJB30',
      description: 'Resektion av två leversegment',
      preparationTime: 58,
      operationTime: 170,
      dismantlingTime: 39,
      postOperationalTime: 464,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'JEA00',
      description: 'Appendektomi',
      preparationTime: 38,
      operationTime: 63,
      dismantlingTime: 30,
      postOperationalTime: 240,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'KEC01',
      description: 'Perkutan endoskopisk radikal prostatektomi',
      preparationTime: 67,
      operationTime: 129,
      dismantlingTime: 30,
      postOperationalTime: 199,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'LCD00',
      description: 'Hysterektomi',
      preparationTime: 55,
      operationTime: 113,
      dismantlingTime: 29,
      postOperationalTime: 302,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'BAA60',
      description: 'Tyreoidektomi',
      preparationTime: 52,
      operationTime: 152,
      dismantlingTime: 37,
      postOperationalTime: 270,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'KED22',
      description: 'Transuretral resektion av prostata (i)',
      preparationTime: 30,
      operationTime: 55,
      dismantlingTime: 20,
      postOperationalTime: 197,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'JKA20',
      description: 'Kolecystektomi',
      preparationTime: 51,
      operationTime: 125,
      dismantlingTime: 40,
      postOperationalTime: 278,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'JMA10',
      description: 'Abdominal splenektomi',
      preparationTime: 49,
      operationTime: 124,
      dismantlingTime: 38,
      postOperationalTime: 450,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'UJD02',
      description: 'Gastroskopi',
      preparationTime: 23,
      operationTime: 30,
      dismantlingTime: 28,
      postOperationalTime: 100,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kvåCode: 'KAC00',
      description: 'Nefrektomi',
      preparationTime: 38,
      operationTime: 153,
      dismantlingTime: 72,
      postOperationalTime: 406,
      downTime: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Procedures');
  }
};