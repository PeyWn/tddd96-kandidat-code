'use strict';
module.exports = (sequelize, DataTypes) => {
  var Local = sequelize.define('Local', {
    name: DataTypes.STRING
  }, {});
  Local.associate = function(models) {
    //Local.belongsToMany(models.Local_type);
    Local.belongsToMany(models.Booking, {through: models.Booked_local})
  };
  return Local;
};
