const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  people: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  contactInfo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
