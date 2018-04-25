const EXPRESS = require('express');
const PASSPORT = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const DB = require('./models');

const PATIENT = require('./api/patient');
const BOOKING = require('./api/booking');
const DECISION = require('./api/decision');
const MATERIAL = require('./api/material');
const CLINIC = require('./api/clinic');
const STAFF = require('./api/staff');
const ROOM = require('./api/room');
const PROCEDURE = require('./api/procedure');
const ICD10 = require('./api/icd10');

DB.sequelize.authenticate().then(function() {
  console.log('Successfully connected to database!');
}).catch(function(err) {
  console.error('Unable to connect to database:', err);
});

PASSPORT.use(new LocalStrategy(
  function(username, password, done) {
    DB.User.findOne({where: {username: username}}).then(function(user) {
      if (!user) {
        done(null, false, {message: 'Incorrect username.'});
        return;
      }
      if (user.password !== password) {
        done(null, false, {message: 'Incorrect password.'});
      }
      done(null, user);
    });
  }
));

PASSPORT.serializeUser(function(user, cb) {
  cb(null, user.id);
});

PASSPORT.deserializeUser(function(id, cb) {
  DB.User.findById(id).then(function(user) {
    cb(null, user);
  }).catch(function(err) {
    cb(err);
  });
});

module.exports.initAPI = function(APP) {
  APP.use(EXPRESS.json());
  APP.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  APP.use(EXPRESS.urlencoded({extended: true}));

  APP.use(PASSPORT.initialize());
  APP.use(PASSPORT.session());

  APP.get('/api/login', function(req, res) {
    res.send(req.isAuthenticated());
  });
  APP.post('/api/login', PASSPORT.authenticate('local'), function(req, res) {
    res.end();
  });
  APP.delete('/api/login', function(req, res) {
    req.logout();
    res.end();
  });
  APP.use(function(req, res, next) {
    if (!req.isAuthenticated()) {
      res.status(401).end();
    }
    next();
  });

  PATIENT.initAPI(APP);
  BOOKING.initAPI(APP);
  DECISION.initAPI(APP);
  STAFF.initAPI(APP);
  MATERIAL.initAPI(APP);
  ROOM.initAPI(APP);
  CLINIC.initAPI(APP);
  PROCEDURE.initAPI(APP);
  ICD10.initAPI(APP);
};
