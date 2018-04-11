'use strict';
module.exports = (sequelize, DataTypes) => {
  var Clinic = sequelize.define('Clinic', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Clinic.associate = function(models) {
    Clinic.hasMany(models.Decision);
    Clinic.hasMany(models.Staff);
  };
  return Clinic;
};
