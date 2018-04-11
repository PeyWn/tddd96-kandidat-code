'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booked_local = sequelize.define('Booked_local', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Booked_local.associate = function(models) {
  };
  return Booked_local;
};
