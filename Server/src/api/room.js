const DB = require('./../models');
module.exports.initAPI = function(APP) {
  //Get all rooms
  APP.get('/room', function(req, res) {
    DB.Local.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(rooms) {
      res.send(rooms);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Add room
  APP.post('/room', function(req, res) {
    DB.Local.create(req.body).then(function(result) {
      res.end(); // Should be 201?
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get room by id
  APP.get('/room/:id', function(req, res) {
    DB.Local.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(room) {
      res.send(room);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Update room by id
  APP.put('/room.id', function(req, res) {
    DB.Local.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Delete room by id
  APP.delete('/room/:id', function(req, res) {
    DB.Local.destroy({where: {id: req.params.is}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get room by type
  APP.get('/room/t/:type', function (req, res) {
    DB.Local.findAll({where: {LocalTypeId: req.params.type}}).then(function(rooms) {
      res.send(rooms);
    });
  });


  //Get all available times of this room
  APP.get('/room/:id/available', function (req, res) {
    DB.Local.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (room) {
      if(room) {
        room.getFree_times().then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get all bookings of this room
  APP.get('/room/:id/booked', function (req, res) {
    DB.Local.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (room) {
      if(room) {
        room.getBookings().then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Get all procedures using this room
  APP.get('/room/:id/procedures', function (req, res) {
    DB.Local.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function (room) {
      if(room) {
        room.getProcedures().then(function (procedures) {
          res.send(procedures)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
};
