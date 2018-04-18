const DB = require('./../models');
const STAFF = require('./staff');

const INCLUDE = {
  model: DB.Decision,
  include: [STAFF.INCLUDE, DB.Clinic],
  attributes: {
    exclude: ['StaffId', 'ClinicId']
  }
};
module.exports.INCLUDE = INCLUDE;

module.exports.initAPI = function(APP) {
  //Get all decisions
  APP.get('/decision', function(req, res){
    DB.Decision.findAll(INCLUDE).then(function(decisions){
      res.send(decisions);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Create a decision
  APP.post('/decision', function(req, res){
    DB.Decision.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get specific decision
  APP.get('/decision/:ID', function(req, res){
    DB.Decision.findById(req.params.ID, INCLUDE).then(function(decision){
      res.send(decision);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Update specific decision
  APP.put('/decision/:ID', function(req, res){
    DB.Decision.update(req.body, {where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Delete specific decision
  APP.delete('/decision/:ID', function(req, res){
    DB.Decision.destroy({where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get procedures from decision
  APP.get('/decision/:ID/procedures', function(req, res){
    DB.Decision.findById(req.params.ID).then(function(decision) {
      if (decision) {
        decision.getProcedures().then(function(procedures) {
          res.send(procedures);
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });

      } else {
        res.status(404).send('Decision not found');
      }
    });
  });
};
