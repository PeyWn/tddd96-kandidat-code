'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_staff = sequelize.define('Booked_staff', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_staff.associate = function(models) {
  };
  return Booked_staff;
};
