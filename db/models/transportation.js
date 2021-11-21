const Sequelize = require("sequelize");
const db = require("../db");

const Transportation = db.define("transportation", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Transportation;
