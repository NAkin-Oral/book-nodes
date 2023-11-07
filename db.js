// SEQUELIZE
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '123qwe', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5433',
});

const connectDB = async () => {
  // Synchronize
  sequelize.sync(); // Run once
  //sequelize.sync({force:true})   // DROP& CREATE
  //sequelize.sync({alter:true})   // Backup & drop & create & backup

  await sequelize.authenticate();
  console.log('Connected to DB'.yellow.underline);
};

module.exports = { sequelize, connectDB };
