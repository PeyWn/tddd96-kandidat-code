'use strict';
module.exports = (sequelize, DataTypes) => {
  var Material_type = sequelize.define('Material_type', {
    id: DataTypes.INTEGER
  }, {});
  Material_type.associate = function(models) {
    // associations can be defined here
  };
  return Material_type;
};