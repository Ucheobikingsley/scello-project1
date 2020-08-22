// const Sequelize = require('sequelize');
// const sequelize = new Sequelize({
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "scellodb",
//     dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// module.exports = sequelize

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "password",
  DB: "scellodb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};