'use strict';
module.exports = (sequelize, DataTypes) => {
  var Staff = sequelize.define('Staff', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Staff.associate = function(models) {
    Staff.hasMany(models.Decision);
    Staff.belongsTo(models.Speciality);
    Staff.belongsTo(models.Clinic);
    Staff.belongsToMany(models.Booking, {through: models.Booked_staff});
    Staff.belongsToMany(models.Procedure, {through: 'procedure_staff'});
    Staff.hasMany(models.Free_times);
  };
  return Staff;
};
