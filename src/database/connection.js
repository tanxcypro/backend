// Get Sequelize here ...

// Create db variable here ...

// Create sequelize variable and get config as object here ...
// Customize your database config

// Enter the database config to sequelize here ...

// Create exports module db here ...
const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("course-express", "root", "", {
  host: "localhost",
  
  dialect: "mysql",
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;

module.exports = db;