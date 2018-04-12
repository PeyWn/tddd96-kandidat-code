'use strict';

const MS_PER_HOUR = 60*60*1000;
const MS_PER_DAY = 24*MS_PER_HOUR;
const MS_PER_WEEK = 7 * MS_PER_DAY;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Decisions', [{
      id: 1,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 2*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '194205039037',
      ICD10Code: 'C23.9',
      StaffId: 1
    },{
      id: 2,
      decisionDate: new Date(),
      urgent: true,
      latestDate: new Date(new Date().getTime() + 6*MS_PER_HOUR),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '195011012365',
      ICD10Code: 'K35.3',
      StaffId: 1
    },{
      id: 3,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 2,
      PatientSsn: '195205162331',
      ICD10Code: 'C61.9',
      StaffId: 4
    },{
      id: 4,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 6*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '199005102398',
      ICD10Code: 'C73.9',
      StaffId: 1
    },{
      id: 5,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 3,
      PatientSsn: '199005222386',
      ICD10Code: 'D25.9',
      StaffId: 3
    },{
      id: 6,
      decisionDate: new Date(),
      urgent: true,
      latestDate: new Date(new Date().getTime() + 2*MS_PER_HOUR),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '189109119801',
      ICD10Code: 'S36.0',
      StaffId: 1
    },{
      id: 7,
      decisionDate: new Date(),
      urgent: true,
      latestDate: new Date(new Date().getTime() + 12*MS_PER_HOUR),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '194412107262',
      ICD10Code: 'K81.0',
      StaffId: 5
    },{
      id: 8,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 2,
      PatientSsn: '194401627718',
      ICD10Code: 'D29.1',
      StaffId: 4
    },{
      id: 9,
      decisionDate: new Date(),
      urgent: true,
      latestDate: new Date(new Date().getTime() + 2*MS_PER_HOUR),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '194907162343',
      ICD10Code: 'K92.2',
      StaffId: 5
    },{
      id: 10,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '194205167051',
      ICD10Code: 'C23.9',
      StaffId: 1
    },{
      id: 11,
      decisionDate: new Date(),
      urgent: true,
      latestDate: new Date(new Date().getTime() + 6*MS_PER_HOUR),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '196110182547',
      ICD10Code: 'K35.3',
      StaffId: 1
    },{
      id: 12,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 6*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 2,
      PatientSsn: '197001239297',
      ICD10Code: 'C61.9',
      StaffId: 4
    },{
      id: 13,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 3,
      PatientSsn: '198810039928',
      ICD10Code: 'D25.9',
      StaffId: 3
    },{
      id: 14,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 2*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '199001072397',
      ICD10Code: 'C73.9',
      StaffId: 1
    },{
      id: 15,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 8*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 2,
      PatientSsn: '199002112390',
      ICD10Code: 'D29.1',
      StaffId: 4
    },{
      id: 16,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 4*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '199004122397',
      ICD10Code: 'K81.0',
      StaffId: 5
    },{
      id: 17,
      decisionDate: new Date(),
      urgent: false,
      latestDate: new Date(new Date().getTime() + 6*MS_PER_WEEK),
      createdAt: new Date(),
      updatedAt: new Date(),
      ClinicId: 1,
      PatientSsn: '201201252382',
      ICD10Code: 'C64.9',
      StaffId: 5
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Decisions');
  }
};
