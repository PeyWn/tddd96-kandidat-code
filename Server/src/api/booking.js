const DB = require('./../models');
const STAFF = require('./staff');
const MATERIAL = require('./material');
const ROOM = require('./room');
module.exports.initAPI = function(APP) {

  //Get all bookings
  APP.get('/booking', function(req, res) {
    DB.Booking.findAll().then(function(bookings) {
      res.send(bookings);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Create a booking
  APP.post('/booking', function(req, res) {
    var booking = {};
    booking.preliminary = req.body.preliminary;
    booking.DecisionId = req.body.DecisionId;
    booking.createdAt = new Date();
    booking.updatedAt = booking.createdAt;
    DB.Booking.create(booking).then(function(booking) {
      res.status(201).send(booking);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get booking by ID
  APP.get('/booking/:ID', function(req, res) {
    DB.Booking.findById(req.params.ID).then(function(booking) {
      res.send(booking);
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Update booking by ID
  APP.put('/booking/:ID', function(req, res) {
    var updatedFields = {};
    updatedFields.preliminary = req.body.preliminary;
    updatedFields.updatedAt = new Date();
    DB.Booking.update(updatedFields, {where: {id: req.params.ID}}).then(function() {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Delete booking by ID
  APP.delete('/booking/:ID', function(req, res) {
    DB.Booking.destroy({where: {id: req.params.ID}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Get staff for booking
  APP.get('/booking/:ID/staff', function(req, res) {
    DB.Booking.findById(req.params.ID).then(function(booking) {
      if(booking) {
        booking.getStaffs(STAFF.INCLUDE).then(function(staff) {
          res.send(staff);
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add staff to booking
  APP.post('/booking/:id/staff', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.addStaff(req.body.staffId, {through: {start_time: req.body.startDate, end_time: req.body.endDate}}).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Remove staff from booking
  APP.delete('/booking/:id/staff/:staffId', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.removeStaff(req.params.staffId).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    });
  });

  //Get materials in booking
  APP.get('/booking/:ID/material', function (req, res) {
    DB.Booking.findById(req.params.ID).then(function(booking) {
      if(booking) {
        booking.getMaterials(MATERIAL.INCLUDE).then(function(material) {
          res.send(material);
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add material to booking
  APP.post('/booking/:id/material', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.addMaterial(req.body.materialId, {through: {start_time: req.body.startDate, end_time: req.body.endDate}}).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Remove material from booking
  APP.delete('/booking/:id/material/:materialId', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.removeMaterial(req.params.materialId).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    });
  });

  //Get rooms in booking
  APP.get('/booking/:ID/room', function(req, res) {
    DB.Booking.findById(req.params.ID).then(function(booking) {
      if(booking) {
        booking.getLocals(ROOM.INCLUDE).then(function(room) {
          res.send(room);
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Add room to booking
  APP.post('/booking/:id/room', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.addLocal(req.body.roomId, {through: {start_time: req.body.startDate, end_time: req.body.endDate}}).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    }).catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

  //Remove room from booking
  APP.delete('/booking/:id/room/:roomId', function(req, res) {
    DB.Booking.findById(req.params.id).then(function(booking) {
      if (booking) {
        booking.removeLocal(req.params.roomId).then(function() {
          res.end();
        }).catch(function(err) {
          console.log(err);
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Booking not found');
      }
    });
  });
};
