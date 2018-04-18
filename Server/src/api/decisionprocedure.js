const DB = require('./../models');

module.exports.INCLUDE = {
  model: DB.DecisionProcedure,
  attributes: {
    exclude: ['DecisionId', 'ProcedureKvåCode']
  }
};
