const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all materials
  APP.get('/clinic', function(req, res) {
    DB.Clinic.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(clinics) {
      res.send(clinics);
    });
  });

  // Add new material
  APP.post('/clinic', function (req, res) {
    DB.Clinic.create(req.body).then(function (result) {
      res.end();
    }).catch(function (err) {
      res.status(500).send(err);
    });
  });

  // Get clinic by id
  APP.get('/clinic/:id', function (req, res) {
    DB.Clinic.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (clinic) {
      res.send(clinic);
    });
  });

  // Update clinic
  APP.put('/clinic/:id', function (req, res) {
    DB.Clinic.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function (err) {
      res.status(500).send(err);
    });
  });


 // Delete clinic
 APP.delete('clinic/:id', function (req, res) {
   DB.Clinic.destroy({where: {id: req.params.id}}).then(function (result) {
     res.end();
   }).catch(function (err) {
     res.status.send(err);
   });
 });
};
