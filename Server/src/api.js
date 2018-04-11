const EXPRESS = require('express');
const PATIENT = require('./api/patient');
const DB = require('./models');
DB.sequelize.authenticate().then(function() {
  console.log('Successfully connected to database!');
}).catch(function(err) {
  console.error('Unable to connect to database:', err);
});
DB.sequelize.sync();

module.exports.initAPI = function(APP) {
  APP.use(EXPRESS.json());
  APP.use(EXPRESS.urlencoded({extended: true}));

  PATIENT.initAPI(APP);

  // One example, TODO Replace with actual
  APP.get('/api/test', function (req, res) {
    var result = [
      { name: 'Test1', age: 50 },
      { name: 'Test2', age: 37 }
      ];
    res.send(result);
  });
};
