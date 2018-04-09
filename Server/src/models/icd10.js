'use strict';
module.exports = (sequelize, DataTypes) => {
  var ICD10 = sequelize.define('ICD10', {
    code: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  ICD10.associate = function(models) {
    // associations can be defined here
  };
  return ICD10;
};