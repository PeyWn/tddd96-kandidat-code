const DB = require('./../models');
module.exports.initAPI = function(APP) {

  //Get all bookings
  APP.get('/booking', function(req,res){
    DB.Booking.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(bookings){
      res.send(bookings);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });

  //Create a booking
  APP.post('/booking', function(req,res){
    DB.Booking.create(req.body).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get booking by ID
  APP.get('/booking/:ID', function(res,req){
    DB.Booking.findById(req.params.ID, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(booking){
      res.send(booking);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Update booking by ID
  APP.put('/booking/:ID', function(res,req){
    DB.Booking.update(req.body, {where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Delete booking by ID
  APP.delete('/booking/:ID', function(res,req){
    DB.Booking.destroy(req.body, {where: {ID: req.params.ID}}).then(function(result){
      res.end();
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  //Get staff for booking
  APP.get('/booking/:ID/staff', function(res,req){
    DB.Booking.findById(req.params.ID).then(function(booking){
      if(booking){
        booking.getStaff({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(staff){
          res.send(staff);
        }).catch(function(err){
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Booking not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  APP.get('/booking/:ID/material', function (res,req){
    DB.Booking.findById(req.params.ID).then(function(booking){
      if(booking){
        booking.getMaterial({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(material){
          res.send(material);
        }).catch(function(err){
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Booking not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  APP.get('booking/:ID/room', function(res,req){
    DB.Booking.findById(req.params.ID).then(function(booking){
      if(booking){
        booking.getLocals({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(local){
          res.send(local);
        }).catch(function(err){
          res.status(500).send(err);
        });
      }else{
        res.status(404).send('Booking not found');
      }
    }).catch(function(err){
      res.status(500).send(err);
    });
  });
};
