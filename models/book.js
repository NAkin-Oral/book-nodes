const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Book = sequelize.define('Book', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  ISBN: DataTypes.STRING,
  genre: DataTypes.STRING,
  publicationYear: DataTypes.INTEGER,
});

module.exports = Book;
