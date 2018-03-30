const EXPRESS = require('express');
const API = require('./api');
const APP = EXPRESS();

API.initAPI(APP);

APP.use(EXPRESS.static(__dirname + '/../../Client/dist'));
APP.listen(80);
