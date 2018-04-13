'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var times = [{
      id: 1,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'mån',
      LocalId: null,
      StaffId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      start_time: '08:00',
      end_time: '12:00',
      weekday: 'tis',
      LocalId: null,
      StaffId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      start_time: '13:00',
      end_time: '16:00',
      weekday: 'ons',
      LocalId: null,
      StaffId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'mån',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tis',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'ons',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'tor',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'fre',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'lör',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      start_time: '00:00',
      end_time: '24:00',
      weekday: 'sön',
      LocalId: null,
      StaffId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 11,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'tis',
      LocalId: null,
      StaffId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 12,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'ons',
      LocalId: null,
      StaffId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 13,
      start_time: '13:00',
      end_time: '16:00',
      weekday: 'tor',
      LocalId: null,
      StaffId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 14,
      start_time: '08:00',
      end_time: '12:00',
      weekday: 'fre',
      LocalId: null,
      StaffId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 15,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'mån',
      LocalId: null,
      StaffId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 16,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'tis',
      LocalId: null,
      StaffId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 17,
      start_time: '08:00',
      end_time: '16:00',
      weekday: 'tor',
      LocalId: null,
      StaffId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 18,
      start_time: '08:00',
      end_time: '12:00',
      weekday: 'fre',
      LocalId: null,
      StaffId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }];
    //Room 1
    for (let i = 0; i < 5; ++i) {
      times.push({
        start_time: '07:00',
        end_time: '18:00',
        weekday: getDayString(i),
        LocalId: 1,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 2
    for (let i = 0; i < 5; ++i) {
      times.push({
        start_time: '07:00',
        end_time: '18:00',
        weekday: getDayString(i),
        LocalId: 2,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 3
    for (let i = 0; i < 5; ++i) {
      times.push({
        start_time: '07:00',
        end_time: '18:00',
        weekday: getDayString(i),
        LocalId: 3,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 4
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 4,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 5
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 5,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 6
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 6,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 7
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 7,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 8
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 8,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 9
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 9,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 10
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 10,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 11
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 11,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 12
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 12,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    //Room 13
    for (let i = 0; i < 7; ++i) {
      times.push({
        start_time: '00:00',
        end_time: '24:00',
        weekday: getDayString(i),
        LocalId: 13,
        StaffId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Free_times', times);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Free_times')
  }
};

function getDayString(n) {
  switch(n) {
    case 0:
      return 'mån';
    case 1:
      return 'tis';
    case 2:
      return 'ons';
    case 3:
      return 'tor';
    case 4:
      return 'fre';
    case 5:
      return 'lör';
    case 6:
      return 'sön'
    default:
      throw 'Invalid day';
  }
}
