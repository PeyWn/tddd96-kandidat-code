const EXPRESS = require('express');
const API = require('./api');
const APP = EXPRESS();

APP.use(EXPRESS.static(__dirname + '/../../Client/dist'));
API.initAPI(APP);

APP.listen(4900);
