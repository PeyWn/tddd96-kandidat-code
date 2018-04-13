'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Free_times', [{
      id: 1,
      start_time: '8:00',
      end_time: '16:00',
      weekday: 'mån',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      start_time: '8:00',
      end_time: '12:00',
      weekday: 'tis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      start_time: '13:00',
      end_time: '16:00',
      weekday: 'ons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'mån',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'ons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'fre',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'lör',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'sön',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 11,
      start_time: '8:00',
      end_time: '16:00',
      weekday: 'tis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 12,
      start_time: '8:00',
      end_time: '16:00',
      weekday: 'ons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 13,
      start_time: '13:00',
      end_time: '16:00',
      weekday: 'tor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 14,
      start_time: '8:00',
      end_time: '12:00',
      weekday: 'fre',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 15,
      start_time: '8:00',
      end_time: '16:00',
      weekday: 'tor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 16,
      start_time: '7:00',
      end_time: '18:00',
      weekday: 'mån',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 17,
      start_time: '7:00',
      end_time: '18:00',
      weekday: 'tis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 18,
      start_time: '7:00',
      end_time: '18:00',
      weekday: 'ons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 19,
      start_time: '7:00',
      end_time: '18:00',
      weekday: 'tor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 20,
      start_time: '7:00',
      end_time: '18:00',
      weekday: 'fre',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 21,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'mån',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 22,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 23,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'ons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 24,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 25,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'fre',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 26,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'lör',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 27,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'sön',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Free_times')
  }
};
