'use strict';
module.exports = (sequelize, DataTypes) => {
  var Decision = sequelize.define('Decision', {
    decisionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    urgent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    latestDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Decision.associate = function(models) {
    Decision.belongsTo(models.Patient);
    Decision.belongsTo(models.ICD10);
    Decision.belongsToMany(models.Procedure, {through: models.DecisionProcedure});
    Decision.belongsTo(models.Clinic);
    Decision.hasOne(models.Booking);
    Decision.belongsTo(models.Staff);
  };
  return Decision;
};
