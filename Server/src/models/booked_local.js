'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_local = sequelize.define('Booked_local', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_local.associate = function(models) {
    Booked_local.hasMany(models.Local);
    Booked_local.hasMany(models.Booking);
  };
  return Booked_local;
};
