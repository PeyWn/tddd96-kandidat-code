const SEQUELIZE = require('sequelize');
const DB = require('./src/models');
const SEQ = new SEQUELIZE('', 'root', 'password', {
  dialect: 'mysql'
});

SEQ.query('DROP DATABASE IF EXISTS database_development').then(function() {
  return SEQ.query('CREATE DATABASE database_development');
}).then(function() {
  DB.sequelize.sync().then(function() {
    process.exit(0);
  });
});
