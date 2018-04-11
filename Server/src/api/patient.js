const DB = require('./../models');
module.exports.initAPI = function(APP) {
  APP.get('/patient', function(req, res) {
    DB.Patient.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(patients) {
      res.send(patients);
    });
  });
  APP.post('/patient', function(req, res) {
    DB.Patient.create(req.body).then(function(result) {
      res.end(); // Should be 201?
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  APP.get('/patient/:ssn', function(req, res) {
    DB.Patient.findById(req.params.ssn, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(patient) {
      res.send(patient);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  APP.get('/patient/:ssn/decisions', function(req, res) {
    DB.Patient.findById(req.params.ssn).then(function(patient) {
      if (patient) {
        patient.getDecisions({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(decisions) {
          res.send(decisions);
        }).catch(function(err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Patient not found.');
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
};
