'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define('Booking', {
    preliminary: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Decision);
    Booking.belongsTo(models.User);
    Booking.belongsToMany(models.Local, {through: models.Booked_local});
    Booking.belongsToMany(models.Staff, {through: models.Booked_staff});
    Booking.belongsToMany(models.Material, {through: models.Booked_material});
  };
  return Booking;
};
