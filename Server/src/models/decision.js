'use strict';
module.exports = (sequelize, DataTypes) => {
  var Decision = sequelize.define('Decision', {
    decisionDate: DataTypes.DATE,
    urgent: DataTypes.BOOLEAN,
    latestDate: DataTypes.DATE
  }, {});
  Decision.associate = function(models) {
    Decision.belongsTo(models.Patient);
  };
  return Decision;
};
