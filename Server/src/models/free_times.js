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
    Free_times.belongsTo(models.Local);
    Free_times.belongsTo(models.Staff);
  };
  return Free_times;
};
