const Sequelize = require("sequelize");
const db = require("../db");

const Quote = db.define("quote", {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  depatureDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  returnDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Quote;
