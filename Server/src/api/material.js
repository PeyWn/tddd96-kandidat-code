const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all materials
  APP.get('/material', function(req, res) {
    DB.Material.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(materials) {
      res.send(materials);
    });
  });

  //Add material
  APP.post('/material', function(req, res) {
    DB.Material.create(req.body).then(function(result) {
      res.end(); // Should be 201?
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get material by id
  APP.get('/material/:id', function(req, res) {
    DB.Material.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(material) {
      res.send(material);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Update material by id
  APP.put('/material.id', function(req, res) {
    DB.Material.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Delete material by id
  APP.delete('/material/:id', function(req, res) {
    DB.Material.destroy({where: {id: req.params.is}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get material by type
  APP.get('/material/t/:type', function (req, res) {
    DB.Material.findAll({where: {MaterialTypeId: req.params.type}, attributes: {exclude: ['createdAt', 'updateAt']}}).then(function(materials) {
      res.send(materials);
    });
  });

  //Get all bookings of this material
  APP.get('/material/:id/booked', function (req, res) {
    DB.Material.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (material) {
      if(material) {
        material.getBookings().then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Material does not exist!");
      }
    });
  });

  //Get all procedures using this material
  APP.get('/material/:id/procedures', function (req, res) {
    DB.Material.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (material) {
      if(material) {
        material.getProcedures().then(function (procedures) {
          res.send(procedures)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Material does not exist!");
      }
    });
  });
};
