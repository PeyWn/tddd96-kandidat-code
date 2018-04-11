'use strict';
module.exports = (sequelize, DataTypes) => {
  var Local_type = sequelize.define('Local_type', {
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Local_type.associate = function(models) {
    Local_type.hasMany(models.Local);
  };
  return Local_type;
};
