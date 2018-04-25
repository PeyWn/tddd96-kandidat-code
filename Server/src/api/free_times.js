const DB = require('./../models');

module.exports.INCLUDE = {
  model: DB.Free_times,
  attributes: {
    exclude: ['StaffId', 'LocalId']
  }
};
