'use strict';

var requireLogin = require('../lib/').middlewares.requireLogin;

// Routes client requests to handlers
module.exports = function(server, handlers) {
  // For the server status
  server.get('/status', handlers.status.get);
  server.get('/data', handlers.data.index.get);
};
