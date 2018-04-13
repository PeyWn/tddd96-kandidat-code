const DB = require('./../models');

module.exports.initAPI = function(APP) {
  //Get all staff
  APP.get('/staff', function(req, res) {
    DB.Staff.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(staff) {
      res.send(staff);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Add staff
  APP.post('/staff', function(req, res) {
    DB.Staff.create(req.body).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Get staff by id
  APP.get('/staff/:id', function(req, res) {
    DB.Staff.findById(req.params.id, {attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(staff) {
      res.send(staff);
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Update staff by id
  APP.put('/staff/:id', function(req, res) {
    DB.Staff.update(req.body, {where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Delete staff by id
  APP.delete('/staff/:id', function(req, res) {
    DB.Staff.destroy({where: {id: req.params.id}}).then(function(result) {
      res.end();
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Get available times for staff by id
  APP.get('/staff/:id/available', function(req, res) {
    DB.Staff.findById(req.params.id).then(function(staff) {
      if (staff) {
        staff.getFree_times({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(free_times) {
          res.send(free_times);
        }).catch(function(err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Staff not found.');
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
  //Get bookings for staff by id
  APP.get('/staff/:id/booked', function(req, res) {
    DB.Staff.findById(req.params.id).then(function(staff) {
      if (staff) {
        staff.getBookings({attributes: {exclude: ['createdAt', 'updatedAt']}}).then(function(bookings) {
          res.send(bookings);
        }).catch(function(err) {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Staff not found.');
      }
    }).catch(function(err) {
      res.status(500).send(err);
    });
  });
}
