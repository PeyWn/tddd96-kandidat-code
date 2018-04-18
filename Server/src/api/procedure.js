const DB = require('./../models');
const STAFF = require('./staff');
const DECISION = require('./decision');
const ROOM = require('./room');
const MATERIAL = require('./material');

module.exports.initAPI = function(APP) {

  //Get all KVÅ-codes
  APP.get('/procedure', function(req, res){
    DB.Procedure.findAll().then(function(procedures){
      res.send(procedures);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add new KVÅ-code
  APP.post('/procedure', function(req, res){
    DB.Procedure.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get procedure by code
  APP.get('/procedure/:code', function(req, res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      res.send(procedure);
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get staff assigned to a procedure
  APP.get('/procedure/:code/staff', function(req, res) {
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getStaffs(Object.assign(STAFF.INCLUDE, {joinTableAttributes: []})).then(function(staff) {
          res.send(staff);
        }).catch(function(err){
          console.log(err);
           res.status(500).send(err);
        });
      } else {
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get room assigned to a procedure
  APP.get('/procedure/:code/room', function(req, res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getLocals(Object.assign(ROOM.INCLUDE, {joinTableAttributes: []})).then(function(room){
          res.send(room);
        }).catch(function(err){
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get materials assigned to a procedure
  APP.get('/procedure/:code/material', function(req, res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getMaterials(Object.assign(MATERIAL.INCLUDE, {joinTableAttributes: []})).then(function(materials){
          res.send(materials);
        }).catch(function(err){
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get decisions for a procedure
  APP.get('/procedure/:code/decision', function(req, res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getDecisions(Object.assign(DECISION.INCLUDE, {joinTableAttributes: []})).then(function(decisions){
          res.send(decisions);
        }).catch(function(err){
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      console.log(err);
      res.status(500).send(err);
    });
  });

};
