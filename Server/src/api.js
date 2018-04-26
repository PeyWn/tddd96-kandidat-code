const EXPRESS = require('express');
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
const LOGIN = require('./api/login');

DB.sequelize.authenticate().then(function() {
  console.log('Successfully connected to database!');
}).catch(function(err) {
  console.error('Unable to connect to database:', err);
});

module.exports.initAPI = function(APP) {
  APP.use(EXPRESS.json());
  APP.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  APP.use(EXPRESS.urlencoded({extended: true}));

  LOGIN.initAPI(APP);

  // Every api after this will require authentication
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
