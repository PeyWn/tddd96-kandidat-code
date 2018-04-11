'use strict';
module.exports = (sequelize, DataTypes) => {
  var Local_type = sequelize.define('Local_type', {
    description: DataTypes.TEXT
  }, {});
  Local_type.associate = function(models) {
    Local_type.belongsTo(models.Local);
  };
  return Local_type;
};
