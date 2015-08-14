var express        = require('express');
var path           = require('path');
var favicon        = require('serve-favicon');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var load           = require('express-load');
var mongoose       = require("mongoose");
var moment         = require("moment");
var methodOverride = require("method-override");
var session        = require("express-session");
var flash          = require('flash');

var app          = express();

var porta_aplicacao = 3000;

// view engine setup
app.set('view engine', 'ejs');

global.db = mongoose.connect("mongodb://localhost/project_manager");

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('keyboard cat'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session());
app.use(flash());
app.listen(porta_aplicacao);

load('models')
  .then('controllers')
  .then('views')
  .then('routes')
  .into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	  message: err.message,
	  error: err
	});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
	message: err.message,
	error: {}
  });
});


module.exports = app;
console.log('Aplicação inicializada na porta ' + porta_aplicacao);