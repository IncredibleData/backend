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

app.listen(config.port);
var io = require('socket.io').listen(app);

// configuration ===============================================================
app.use(morgan('dev'));

// routes ======================================================================
require('./config/routes.js')(app, handlers);
require('./lib/socket-handler.js')(config, io);

console.log('Server listening on port ' + config.port);

module.exports = app;
