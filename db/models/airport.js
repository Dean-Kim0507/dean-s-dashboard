const Sequelize = require("sequelize");
const db = require("../db");

const Airport = db.define("airport", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Airport;
