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

};
