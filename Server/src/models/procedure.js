'use strict';
module.exports = (sequelize, DataTypes) => {
  var Procedure = sequelize.define('Procedure', {
    kvåCode: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING(10)
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    preparationTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    operationTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dismantlingTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    postOperationalTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    downTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Procedure.associate = function(models) {
    Procedure.belongsToMany(models.Decision, {through: models.DecisionProcedure});
    Procedure.belongsToMany(models.Material, {through: 'procedure_material'});
    Procedure.belongsToMany(models.Staff, {through: 'procedure_staff'});
    Procedure.belongsToMany(models.Local, {through: 'procedure_local'});
  };
  return Procedure;
};
