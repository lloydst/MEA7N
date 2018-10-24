var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var angularClient = 'dist/ng7tester'
var apiRouter = require('./server/routes/api');
var dotenv = require('dotenv').config();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

const MONGOURI = process.env.MONGOURI ;
// use MONGOURI if you want your connection string to change depending on your environment vars
// "|| 'mongodb://localhost'" is only used as a fall back in case MONGOURI isn't defined
mongoose.connect(MONGOURI || 'mongodb://localhost', { useNewUrlParser: true }) // future ready
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));

app.use('/', express.static(path.join(__dirname, angularClient)));
app.use('/api', apiRouter);
app.use(logger('common', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(logger('common', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));
app.use('*', express.static(path.join(__dirname, angularClient)))
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
