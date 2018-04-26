'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ICD10s', [{
      code: 'C23.9',
      description: 'Malign tumör i gallblåsan',
    },{
      code: 'K35.3',
      description: 'Akut appendicit med lokaliserad peritonit',
    },{
      code: 'C61.9',
      description: 'Malign tumör i prostata',
    },{
      code: 'C73.9',
      description: 'Malign tumör i tyreoida',
    },{
      code: 'D25.9',
      description: 'Icke specificerad lokalisation av uterusmyom',
    },{
      code: 'S36.0',
      description: 'Skada på mjälten',
    },{
      code: 'K81.0',
      description: 'Akut kolecystit',
    },{
      code: 'D29.1',
      description: 'Benign tumör i prostata',
    },{
      code: 'K92.2',
      description: 'Gastrointestinal blödning, ospecificerad',
    },{
      code: 'C64.9',
      description: 'Malign tumör i njure med undantag för njurbäcken',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ICD10s');
  }
};
