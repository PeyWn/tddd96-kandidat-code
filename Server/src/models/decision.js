'use strict';
module.exports = (sequelize, DataTypes) => {
  var Decision = sequelize.define('Decision', {
    decisionTime: DataTypes.DATE
  }, {});
  Decision.associate = function(models) {
    // associations can be defined here
  };
  return Decision;
};