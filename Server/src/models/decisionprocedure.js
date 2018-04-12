'use strict';
module.exports = (sequelize, DataTypes) => {
  var DecisionProcedure = sequelize.define('DecisionProcedure', {
    procedureOrder: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    side: DataTypes.STRING
  }, {});
  DecisionProcedure.associate = function(models) {
    // associations can be defined here
  };
  return DecisionProcedure;
};
