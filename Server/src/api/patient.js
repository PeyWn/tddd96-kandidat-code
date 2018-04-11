const DB = require('./../models');
module.exports.initAPI = function(APP) {
  APP.get('/patient', function(req, res) {
    DB.Patient.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(patients) {
      res.send(patients);
    });
  });

  APP.get('/patient/:ssn', function(req, res) {
    DB.Patient.findById(req.params.ssn, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(patient) {
      res.send(patient);
    });
  });

  APP.get('/patient/:ssn/decisions', function(req, res) {
    DB.Patient.findById(req.params.ssn).then(function(patient) {
      if (!patient) {
        res.end();
        return;
      }
      patient.getDecisions({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(decisions) {
        res.send(decisions);
      });
    });
  });
};
