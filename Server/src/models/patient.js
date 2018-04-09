'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    ssn: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    Patient.hasMany(models.Decision);
  };
  return Patient;
};
