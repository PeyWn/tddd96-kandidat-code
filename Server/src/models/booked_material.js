'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_material = sequelize.define('Booked_material', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_material.associate = function(models) {
  };
  return Booked_material;
};
