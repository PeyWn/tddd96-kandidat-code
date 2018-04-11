'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    ssn: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    Patient.hasMany(models.Decision);
  };
  return Patient;
};
