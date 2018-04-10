'use strict';
module.exports = (sequelize, DataTypes) => {
  var Procedure = sequelize.define('Procedure', {
    kvåCode: DataTypes.STRING,
    description: DataTypes.STRING,
    preparationTime: DataTypes.INTEGER,
    operationTime: DataTypes.INTEGER,
    dismantlingTime: DataTypes.INTEGER,
    postOperationalTime: DataTypes.INTEGER,
    downTime: DataTypes.INTEGER
  }, {});
  Procedure.associate = function(models) {
    Procedure.hasMany(models.Decision);
  };
  return Procedure;
};
