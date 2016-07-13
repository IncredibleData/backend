'use strict';
// app.js
// set up ======================================================================
// get all the tools we need
var config = require('./config');
var morgan = require('morgan');
var express = require('express');
var app = express.createServer();
var handlers = require('./lib').handlers;
var mongoose = require('mongoose');
// Connect to mongoose
mongoose.connect(config.mongoUrl);
var allowHeaders = ['Accept', 'Accept-Version', 'Authorization', 'Content-Type', 'X-Requested-With', 'Session-Id'];

app.listen(config.port);
var io = require('socket.io').listen(app);

// configuration ===============================================================
app.use(morgan('dev'));

// routes ======================================================================
require('./config/routes.js')(app, handlers);
require('./lib/socket-handler.js')(config, io);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  // Vary per origin, if headerS.origin is unset the cookie will not exist
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Vary', 'Origin');

  return next();
});

console.log('Server listening on port ' + config.port);

module.exports = app;
