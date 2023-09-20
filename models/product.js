const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('Product',{
  id:{ 
    type:sequelize.INTERGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  title:sequelize.STRING,
  price:{
    type:sequelize.DOUBLE,
    allowNull:false,
  },
  imageUlr:{
    type:sequelize.STRING,
    allowNull:false,
  },
  description:{
    type:sequelize.STRING,
    allowNull:false,
  }});
module.exports = Product;