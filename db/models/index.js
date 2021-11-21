const Airports = require("./airport");
const User = require("./user");
const Transportation = require("./transportation");
const Quote = require("./quote");

// associations

Transportation.hasMany(Quote);
Quote.belongsTo(Transportation, { as: "transportation" });
Airports.hasMany(Quote);
Quote.belongsTo(Airports, { as: "from" });
Quote.belongsTo(Airports, { as: "dest" });
Quote.hasOne(User);
User.belongsTo(Quote);

module.exports = {
  Airports,
  User,
  Transportation,
  Quote,
};
