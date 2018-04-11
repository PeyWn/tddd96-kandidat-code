'use strict';
module.exports = (sequelize, DataTypes) => {
  var Speciality = sequelize.define('Speciality', {
    description: DataTypes.STRING
  }, {});
  Speciality.associate = function(models) {
    Speciality.hasMany(models.Staff);
  };
  return Speciality;
};
