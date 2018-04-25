const DB = require('./../models');
const DECISION = require('./decision');
const STAFF = require('./staff');

module.exports.initAPI = function(APP) {
  //Get all clinics
  APP.get('/clinic', function(req, res) {
    DB.Clinic.findAll().then(function(clinics) {
      res.send(clinics);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  // Add new clinic
  APP.post('/clinic', function (req, res) {
    DB.Clinic.create(req.body).then(function (result) {
      res.end();
    }).catch(function (err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  // Get clinic by id
  APP.get('/clinic/:id', function (req, res) {
    DB.Clinic.findById(req.params.id).then(function (clinic) {
      res.send(clinic);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  // Update clinic
  APP.put('/clinic/:id', function (req, res) {
    DB.Clinic.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function (err) {
      console.log(err);
      res.status(500).send(err);
    });
  });


 // Delete clinic
 APP.delete('clinic/:id', function (req, res) {
   DB.Clinic.destroy({where: {id: req.params.id}}).then(function (result) {
     res.end();
   }).catch(function (err) {
     console.log(err);
     res.status(500).send(err);
   });
 });

 // Get decisions made by clinic
  APP.get('/clinic/:ID/decision', function(req,res){
    DB.Clinic.findById(req.params.ID).then(function(clinic){
      if(clinic){
        clinic.getDecisions(DECISION.INCLUDE).then(function(decisions){
          res.send(decisions);
        }).catch(function(err){
          console.log(err);
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Clinic not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  // Get all staff in a clinic
  APP.get('/clinic/:ID/staff', function(req,res){
    DB.Clinic.findById(req.params.ID).then(function(clinic){
      if(clinic){
        clinic.getStaffs(STAFF.INCLUDE).then(function(staff){
          res.send(staff);
        }).catch(function(err){
          console.log(err);
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Clinic not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });
};
