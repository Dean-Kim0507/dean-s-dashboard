const express = require("express");
const createError = require("http-errors");
const { join } = require("path");
const cors = require("cors");
const app = express();

const { json, urlencoded } = express;
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.use("/quote", require("./routes/api/quote"));

// require api routes here after I create them
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
