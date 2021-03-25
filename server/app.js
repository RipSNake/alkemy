var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var operationsRouter = require('./routes/operations.routes');

var app = express();


// logs
app.use(logger('dev'));
app.use(cors()); // to enable comunicaction between the different ports
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/operations', operationsRouter); // only accesible when logged in ('/user/:id/operations')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message: 'error'});
});

module.exports = app;
