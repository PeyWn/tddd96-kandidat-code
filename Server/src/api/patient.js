const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all patients
  APP.get('/patient', function(req, res) {
    DB.Patient.findAll().then(function(patients) {
      res.send(patients);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
  //Add patient
  APP.post('/patient', function(req, res) {
    DB.Patient.create(req.body).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
  //Get patient by ssn
  APP.get('/patient/:ssn', function(req, res) {
    DB.Patient.findById(req.params.ssn).then(function(patient) {
      res.send(patient);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
  //Update patient by ssn
  APP.put('/patient/:ssn', function(req, res) {
    DB.Patient.update(req.body, {where: {ssn: req.params.ssn}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
  //Delete patient by ssn
  APP.delete('/patient/:ssn', function(req, res) {
    DB.Patient.destroy({where: {ssn: req.params.ssn}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
  //Get decisions for patient by ssn
  APP.get('/patient/:ssn/decisions', function(req, res) {
    DB.Patient.findById(req.params.ssn).then(function(patient) {
      if (patient) {
        patient.getDecisions().then(function(decisions) {
          res.send(decisions);
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Patient not found.');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
};
