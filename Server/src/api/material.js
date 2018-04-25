const DB = require('./../models');

const INCLUDE = {
  model: DB.Material,
  include: [DB.Material_type],
  attributes: {
    exclude: ['MaterialTypeId']
  }
};
module.exports.INCLUDE = INCLUDE;

module.exports.initAPI = function(APP) {
  //Get all materials
  APP.get('/material', function(req, res) {
    DB.Material.findAll(INCLUDE).then(function(materials) {
      res.send(materials);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add material
  APP.post('/material', function(req, res) {
    DB.Material.create(req.body).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get material by id
  APP.get('/material/:id', function(req, res) {
    DB.Material.findById(req.params.id, INCLUDE).then(function(material) {
      res.send(material);
    }).catch(function(err) {
      console.log(err);
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
    DB.Material.destroy({where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get material by type
  APP.get('/material/t/:type', function (req, res) {
    DB.Material.findAll(Object.assign({where: {MaterialTypeId: req.params.type}}, INCLUDE)).then(function(materials) {
      res.send(materials);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get all bookings of this material
  APP.get('/material/:id/booked', function (req, res) {
    DB.Material.findById(req.params.id).then(function (material) {
      if(material) {
        material.getBookings().then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Material does not exist!");
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get all procedures using this material
  APP.get('/material/:id/procedures', function (req, res) {
    DB.Material.findById(req.params.id).then(function (material) {
      if(material) {
        material.getProcedures({joinTableAttributes: []}).then(function(procedures) {
          res.send(procedures)
        }).catch(function (err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Material does not exist!");
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
};
