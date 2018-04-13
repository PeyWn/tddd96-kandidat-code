const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all decisions
  APP.get('/decision', function(req,res){
    DB.Decision.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(decisions){
      res.send(decisions);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Create a decision
  APP.post('/decision', function(req,res){
    DB.Decision.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get specific decision
  APP.get('/decision/:ID', function(req,res){
    DB.Decision.findById(req.params.ID, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(decision){
      res.send(decision);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Update specific decision
  APP.put('/decision/:ID', function(req,res){
    DB.Decision.update(req.body, {where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Delete specific decision
  APP.delete('/decision/:ID', function(req,res){
    DB.Decision.destroy(req.body, {where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get procedures from decision
  APP.get('/decision/:ID/procedures', function(req,res){
    DB.Decision.findById(req.params.ID).then(function(decision){
      if(decision){
        decision.getProcedures({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(procedures){
          res.send(procedures);
        }).catch(function(err){
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Decisions not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    })
  })
};
