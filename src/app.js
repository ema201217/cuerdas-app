const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const partials = require("express-partials");
const fileUploadExpress = require("express-fileupload");
const methodOverride = require("method-override");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const infoRouter = require("./routes/info");
const adminRouter = require("./routes/admin");
const passwordRouter = require("./routes/password");

/* Middleware required */
const neededInformation = require("./middlewares/info-general");
const sessionLocals = require("./middlewares/sessionLocals");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(partials());
app.use(fileUploadExpress());
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("cuerdasSecret"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  session({
    secret: "cuerdasSecret",
    resave: false,
    saveUninitialized: true,
  })
  );
app.use(sessionLocals);

/* Middleware locals */
app.use(neededInformation);

app.use("/", indexRouter);
app.use("/usuario", usersRouter);
app.use("/productos", productsRouter);
app.use("/info", infoRouter);
app.use("/admin", adminRouter);
app.use("/password", passwordRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
