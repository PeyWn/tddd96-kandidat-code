'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_staff = sequelize.define('Booked_staff', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_staff.associate = function(models) {
    Booked_staff.hasMany(models.Staff);
    Booked_staff.hasMany(models.Booking);
  };
  return Booked_staff;
};
