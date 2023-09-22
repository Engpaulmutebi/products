// // const mysql = require('mysql2');
// const Sequelize = require('sequelize');


// const sequelize = new Sequelize ('node-complete','root','root',{dialect:'mysql',
// host: 'localhost'
// });
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'node-complete',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
   

module.exports = sequelize;