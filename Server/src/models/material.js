'use strict';
module.exports = (sequelize, DataTypes) => {
  var Material = sequelize.define('Material', {
    name: DataTypes.STRING,
    article_no: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    sterilizing_time: DataTypes.INTEGER
  }, {});
  Material.associate = function(models) {
    Material.belongsToMany(models.Booking, {through: models.Booked_material});
  };
  return Material;
};
