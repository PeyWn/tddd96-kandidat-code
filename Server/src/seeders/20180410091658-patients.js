'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Patients', [{
      ssn: '194205039037',
      firstName: 'Alf',
      lastName: 'Olsen',
    },{
      ssn: '195011012365',
      firstName: 'Anné',
      lastName: 'Rosfors',
    },{
      ssn: '195205162331',
      firstName: 'Anders',
      lastName: 'Angelöw',
    },{
      ssn: '199005102398',
      firstName: 'Arne',
      lastName: 'Marken',
    },{
      ssn: '199005222386',
      firstName: 'Anna',
      lastName: 'Forssten',
    },{
      ssn: '189109119801',
      firstName: 'Ellen',
      lastName: 'Kej',
    },{
      ssn: '194412107262',
      firstName: 'Erika',
      lastName: 'Nilsson',
    },{
      ssn: '194401627718',
      firstName: 'Aron Eskil',
      lastName: 'Bäckman',
    },{
      ssn: '194907162343',
      firstName: 'Tekla Elin',
      lastName: 'Simuli Swantesson',
    },{
      ssn: '194205167051',
      firstName: 'Lars-Erik',
      lastName: 'Demopatient',
    },{
      ssn: '196110182547',
      firstName: 'Ellen',
      lastName: 'Ellén',
    },{
      ssn: '197001239297',
      firstName: 'Emanuel',
      lastName: 'Strömberg',
    },{
      ssn: '198810039928',
      firstName: 'Ellenor',
      lastName: 'Granath',
    },{
      ssn: '199001072397',
      firstName: 'Köttö',
      lastName: 'Efrho',
    },{
      ssn: '199002112390',
      firstName: 'Esa-Pekka',
      lastName: 'Ojala',
    },{
      ssn: '199004122397',
      firstName: 'Lahoufi',
      lastName: 'El Madhi',
    },{
      ssn: '201201252382',
      firstName: 'Erika Snuttan',
      lastName: 'Journalen',
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients');
  }
};
