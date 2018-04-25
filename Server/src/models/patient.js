'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    ssn: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Patient.associate = function(models) {
    Patient.hasMany(models.Decision);
  };
  return Patient;
};
