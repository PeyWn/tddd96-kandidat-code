'use strict';
module.exports = (sequelize, DataTypes) => {
  var Material_type = sequelize.define('Material_type', {
    name: DataTypes.STRING
  }, {});
  Material_type.associate = function(models) {
    Material_type.hasMany(models.Material);
  };
  return Material_type;
};
