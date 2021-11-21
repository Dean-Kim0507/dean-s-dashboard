// const Sequelize = require("sequelize");
// const config =

// const db = new Sequelize(
//   process.env.DATABASE_URL,
//   config.username,
//   config.password,
//   config
// );

// module.exports = db;

let db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    native: true,
    protocol: "postgres",
  });
} else {
  db = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = db;
