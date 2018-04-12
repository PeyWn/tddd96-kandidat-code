const DB = require('./../models');
module.exports.initAPI = function(APP) {

  //Get all KVÅ-codes
  APP.get('/procedure', function(req,res){
    DB.Procedure.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(procedures){
      res.send(procedures);
    });
  });

  //Add new KVÅ-code
  APP.post('/procedure', function(req,res){
    DB.Procedure.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get procedure by code
  APP.get('/procedure/:code', function(req,res){
    DB.Procedure.findById(req.params.code, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(procedure){
      res.send(procedure);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get staff assigned to a procedure
  APP.get('/procedure/:code/staff', function(req,res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getStaff({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(staff) {
            res.send(staff);
        }).catch(function(err){
            res.status(500).send(err);
        });
      }else{
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get local assigned to a procedure
  APP.get('/procedure/:code/local', function(req,res){
    DB.Procedure.findById(req.params.code).then(function(procedure){
      if(procedure){
        procedure.getLocal({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(local){
          res.send(local);
        }).catch(function(err){
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Procedure not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

};
