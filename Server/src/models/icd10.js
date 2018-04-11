'use strict';
module.exports = (sequelize, DataTypes) => {
  var ICD10 = sequelize.define('ICD10', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING
  }, {});
  ICD10.associate = function(models) {
    ICD10.hasMany(models.Decision);
  };
  return ICD10;
};
