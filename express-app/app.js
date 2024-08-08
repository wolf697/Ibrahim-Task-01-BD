var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require("./routes/userRouter");
var adminRouter = require("./admin/adminRouter");
var studentRouter = require(".student/StudentRouter");
var teacherRouter = require(".teacher/Router");

var app = express();

// view engine setup

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

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
  res.render('error');
});

module.exports = app;
