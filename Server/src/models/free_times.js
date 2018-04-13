'use strict';
module.exports = (sequelize, DataTypes) => {
  var Free_times = sequelize.define('Free_times', {
    start_time: {
      allowNull: false,
      type: DataTypes.TIME
    },
    end_time: {
      allowNull: false,
      type: DataTypes.TIME
    },
    weekday: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Free_times.associate = function(models) {
    Free_times.belongsToMany(models.Local, {through: 'local_free_times'});
    Free_times.belongsToMany(models.Staff, {through: 'staff_free_times'});
  };
  return Free_times;
};
