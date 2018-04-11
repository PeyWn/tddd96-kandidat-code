'use strict';
module.exports = (sequelize, DataTypes) => {
  var Staff = sequelize.define('Staff', {
    title: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  Staff.associate = function(models) {
    Staff.hasMany(models.Decision);
    Staff.hasMany(models.Speciality);
    Staff.belongsTo(models.Clinic);
    Staff.belongsToMany(models.Booking, {through: models.Booked_staff});
  };
  return Staff;
};
