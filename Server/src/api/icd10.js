const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all ICD-10 codes
  APP.get('/icd10', function(req,res){
    DB.ICD10.findAll().then(function(icd10){
      res.send(icd10);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Add new ICD-10 code
  APP.post('/icd10', function(req,res){
    DB.ICD10.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

};
