'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Patients', [{
      ssn: '194205039037',
      firstName: 'Alf',
      lastName: 'Olsen',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '195011012365',
      firstName: 'Anné',
      lastName: 'Rosfors',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '195205162331',
      firstName: 'Anders',
      lastName: 'Angelöw',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '199005102398',
      firstName: 'Arne',
      lastName: 'Marken',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '199005222386',
      firstName: 'Anna',
      lastName: 'Forssten',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '189109119801',
      firstName: 'Ellen',
      lastName: 'Kej',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '194412107262',
      firstName: 'Erika',
      lastName: 'Nilsson',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '194401627718',
      firstName: 'Aron Eskil',
      lastName: 'Bäckman',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '194907162343',
      firstName: 'Tekla Elin',
      lastName: 'Simuli Swantesson',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '194205167051',
      firstName: 'Lars-Erik',
      lastName: 'Demopatient',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '196110182547',
      firstName: 'Ellen',
      lastName: 'Ellén',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '197001239297',
      firstName: 'Emanuel',
      lastName: 'Strömberg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '198810039928',
      firstName: 'Ellenor',
      lastName: 'Granath',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '199001072397',
      firstName: 'Köttö',
      lastName: 'Efrho',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '199002112390',
      firstName: 'Esa-Pekka',
      lastName: 'Ojala',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '199004122397',
      firstName: 'Lahoufi',
      lastName: 'El Madhi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ssn: '201201252382',
      firstName: 'Erika Snuttan',
      lastName: 'Journalen',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients');
  }
};
