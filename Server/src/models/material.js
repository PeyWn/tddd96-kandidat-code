'use strict';
module.exports = (sequelize, DataTypes) => {
  var Material = sequelize.define('Material', {
    id: DataTypes.INTEGER
  }, {});
  Material.associate = function(models) {
    // associations can be defined here
  };
  return Material;
};