'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_material = sequelize.define('Booked_material', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_material.associate = function(models) {
    Booked_material.hasMany(models.Booking);
    Booked_material.hasMany(models.Material);
  };
  return Booked_material;
};
