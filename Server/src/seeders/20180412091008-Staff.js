'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Staffs', [{
      id: 1,
      title: 'Läkare',
      firstname: 'Sven',
      lastname: 'Kirurg',
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      SpecialityId: 1,
    },{
      id: 2,
      title: 'Jourläkare',
      firstname: 'Thor',
      lastname: 'Hammare',
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      SpecialityId: 1
    },{
      id: 3,
      title: 'Läkare',
      firstname: 'Kirurg',
      lastname: 'Operatörsson',
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 3,
      SpecialityId: 2
    },{
      id: 4,
      title: 'Läkare',
      firstname: 'Ulla',
      lastname: 'Operatör',
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 2,
      SpecialityId: 3
    },{
      id: 5,
      title: 'Läkare',
      firstname: 'Olga',
      lastname: 'Kirurgsson',
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      SpecialityId: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Staffs');
  }
};
