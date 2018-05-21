const DB = require('./../models');
const FREE_TIMES = require('./free_times');

const INCLUDE = {
  model: DB.Local,
  include: [DB.Local_type],
  attributes: {
    exclude: ['LocalTypeId']
  }
}
module.exports.INCLUDE = INCLUDE;

module.exports.initAPI = function(APP) {
  //Get all rooms
  APP.get('/room', function(req, res) {
    DB.Local.findAll().then(function(rooms) {
      res.send(rooms);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add room
  APP.post('/room', function(req, res) {
    DB.Local.create(req.body).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get room by id
  APP.get('/room/:id', function(req, res) {
    DB.Local.findById(req.params.id).then(function(room) {
      res.send(room);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Update room by id
  APP.put('/room.id', function(req, res) {
    DB.Local.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Delete room by id
  APP.delete('/room/:id', function(req, res) {
    DB.Local.destroy({where: {id: req.params.is}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get room by type
  APP.get('/room/t/:type', function (req, res) {
    DB.Local.findAll(Object.assign({where: {LocalTypeId: req.params.type}}, INCLUDE)).then(function(rooms) {
      res.send(rooms);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get all available times of this room
  APP.get('/room/:id/available', function (req, res) {
    DB.Local.findById(req.params.id).then(function (room) {
      if(room) {
        room.getFree_times(FREE_TIMES.INCLUDE).then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get all bookings of this room
  APP.get('/room/:id/booked', function (req, res) {
    DB.Local.findById(req.params.id).then(function (room) {
      if(room) {
        room.getBookings().then(function (bookings) {
          res.send(bookings)
        }).catch(function (err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get all procedures using this room
  APP.get('/room/:id/procedures', function (req, res) {
    DB.Local.findById(req.params.id).then(function (room) {
      if(room) {
        room.getProcedures({joinTableAttributes: []}).then(function (procedures) {
          res.send(procedures)
        }).catch(function (err) {
          res.status(500).send(err);
        });
      } else {
        console.log(err);
        res.status(404).send("Local does not exist!");
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });
};
