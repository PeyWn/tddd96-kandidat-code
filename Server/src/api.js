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
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
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
  APP.post('/api/login', function(req, res, next) {
    PASSPORT.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send({ success : false, message : 'Incorrect login details' });
      }
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.send({ success : true, message : 'Successful login' });
      });
    })(req, res, next);
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
