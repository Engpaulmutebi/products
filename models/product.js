const Sequelize = require('sequelize');
const sequelize = require('../util/database');

// const Product = sequelize.define('Product',{
//   id:{ 
//     type:Sequelize.INTEGER,
//     autoIncrement:true,
//     allowNull:false,
//     primaryKey:true,
//   },
//   title:Sequelize.STRING,
//   price:{
//     type:Sequelize.DOUBLE,
//     allowNull:false,
//   },
//   imageUrl:{
//     type:Sequelize.STRING,
//     allowNull:false,
//   },
//   description:{
//     type:Sequelize.STRING,
//     allowNull:false,
//   }});
const Book = sequelize.define("books", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  release_date: {
    type: Sequelize.DATEONLY,
  },
  subject: {
    type: Sequelize.INTEGER,
  }
});
module.exports = Book;