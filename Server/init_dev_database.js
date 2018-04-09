const SEQUELIZE = require('sequelize');

const SEQ = new SEQUELIZE('', 'root', '', {
  dialect: 'mysql'
});

SEQ.query('DROP DATABASE IF EXISTS database_development').then(function() {
  return SEQ.query('CREATE DATABASE database_development');
}).then(function() {
  process.exit();
});
