const Sequelize = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize('node_complete', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
