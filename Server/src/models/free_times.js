'use strict';
module.exports = (sequelize, DataTypes) => {
  var Free_times = sequelize.define('Free_times', {
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    weekday: DataTypes.STRING
  }, {});
  Free_times.associate = function(models) {
    // associations can be defined here
  };
  return Free_times;
};