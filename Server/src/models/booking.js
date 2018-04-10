'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define('Booking', {
    preliminary: DataTypes.BOOLEAN
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Decision);
  };
  return Booking;
};
