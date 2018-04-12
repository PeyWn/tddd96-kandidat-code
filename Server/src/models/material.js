'use strict';
module.exports = (sequelize, DataTypes) => {
  var Material = sequelize.define('Material', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    article_no: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    quantity: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    sterilizing_time: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {});
  Material.associate = function(models) {
    Material.belongsToMany(models.Booking, {through: models.Booked_material});
    Material.belongsTo(models.Material_type);
    Material.belongsToMany(models.Procedure, {through: 'procedure_material'});
  };
  return Material;
};
