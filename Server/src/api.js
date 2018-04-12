const EXPRESS = require('express');
const DB = require('./models');

const PATIENT = require('./api/patient');

DB.sequelize.authenticate().then(function() {
  console.log('Successfully connected to database!');
}).catch(function(err) {
  console.error('Unable to connect to database:', err);
});
DB.sequelize.sync({force: true});

module.exports.initAPI = function(APP) {
  APP.use(EXPRESS.json());
  APP.use(EXPRESS.urlencoded({extended: true}));

  PATIENT.initAPI(APP);

  APP.get('/test', function(req, res) {
    DB.Decision.find({where: {PatientSsn: '199004122397'}}).then(function(decision) {
      decision.getProcedures().then(function(procedures) {
        res.send(procedures);
      });
    });
  });
};
