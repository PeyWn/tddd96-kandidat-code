const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../../Client/dist'));

app.listen(80);
