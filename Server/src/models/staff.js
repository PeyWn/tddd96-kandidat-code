'use strict';
module.exports = (sequelize, DataTypes) => {
  var Staff = sequelize.define('Staff', {
    title: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  Staff.associate = function(models) {
    Staff.hasMany(models.Booked_staff);
    Staff.hasMany(models.Decision);
    Staff.hasMany(models.Speciality);
    Staff.hasOne(models.Clinic);
  };
  return Staff;
};
