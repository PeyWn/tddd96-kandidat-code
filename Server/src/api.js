const EXPRESS = require('express');

module.exports.initAPI = function(APP) {
  APP.use(EXPRESS.json());
  APP.use(EXPRESS.urlencoded({extended: true}));

  // One example, TODO Replace with actual
  APP.get('/api/test', function (req, res) {
    var result = [
      { name: 'Test1', age: 50 },
      { name: 'Test2', age: 37 }
      ];
    res.send(result);
  });
};
