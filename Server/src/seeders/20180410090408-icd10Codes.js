'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ICD10s', [{
      code: 'C23.9',
      description: 'Malign tumör i gallblåsan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'K35.3',
      description: 'Akut appendicit med lokaliserad peritonit',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'C61.9',
      description: 'Malign tumör i prostata',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'C73.9',
      description: 'Malign tumör i tyreoida',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'D25.9',
      description: 'Icke specificerad lokalisation av uterusmyom',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'S36.0',
      description: 'Skada på mjälten',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'K81.0',
      description: 'Akut kolecystit',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'D29.1',
      description: 'Benign tumör i prostata',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'K92.2',
      description: 'Gastrointestinal blödning, ospecificerad',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 'C64.9',
      description: 'Malign tumör i njure med undantag för njurbäcken',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ICD10s');
  }
};
