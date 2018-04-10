'use strict';
module.exports = (sequelize, DataTypes) => {
  var Clinic = sequelize.define('Clinic', {
    name: DataTypes.STRING
  }, {});
  Clinic.associate = function(models) {
    Clinic.hasMany(models.Decision);
  };
  return Clinic;
};
