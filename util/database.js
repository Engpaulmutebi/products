// const mysql = require('mysql2');
const sequelize = require('sequelize');


const sequelize = new sequelize('node-complete','root','root',{dialect:'mysql',
host: 'localhost'
});
   

module.exports = sequelize;