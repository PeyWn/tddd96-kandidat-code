'use strict';
module.exports = (sequelize, DataTypes) => {
  var Speciality = sequelize.define('Speciality', {
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Speciality.associate = function(models) {
    Speciality.hasMany(models.Staff);
  };
  return Speciality;
};
