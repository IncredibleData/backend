'use strict';

var mongoose = require('mongoose');
var Data = mongoose.model('Data');

module.exports = function socketHandler(config, io) {
  io.on('connection', function(socket) {
    socket.emit('EHLO', {status: 'ok'});
    socket.timestamp = [];
    socket.timestamp.push(new Date());
    // source can either be 'providers' or 'hydraters'
    socket.on('data', function(data) {
      socket.clientData = data;
      socket.timestamp.push(new Date());
      if(socket.timestamp.length === 10) {
        socket.disconnect();
      }
      socket.on('disconnect', function() {
        
        // create a new entry in DB
      });
    });
  });
};
