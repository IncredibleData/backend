'use strict';

var mongoose = require('mongoose');
var Data = mongoose.model('Data');
var async = require('async');

var getAveragePing = function(timestamps) {
  var average = 0;
  var previous = 0;
  timestamps.forEach(function(timestamp) {
    if(previous !== 0) {
      average += timestamp - previous;
    }
    previous = timestamp;
  });
  return average/timestamps.length;
};

module.exports = function socketHandler(config, io) {
  io.on('connection', function(socket) {
    socket.emit('EHLO', {status: 'ok'});
    socket.timestamps = [];
    socket.timestamps.push(new Date());
    // source can either be 'providers' or 'hydraters'
    socket.on('data', function(data) {
      console.log('DATA');
      socket.clientData = data;
      socket.timestamps.push(new Date());
      if(socket.timestamps.length === 10) {
        return socket.disconnect();
      }
      socket.emit('ok', {status: 'ok'});
      socket.on('disconnect', function() {
        console.log(socket.timestamps);
        // create a new entry in DB
        async.waterfall([
          function addData(cb) {
            Data.create({
              userId: socket.clientData.userId,
              os: socket.clientData.os,
              version: socket.clientData.version,
              ssid: socket.clientData.ssid,
              location: socket.clientData.location,
              timestamps: socket.timestamps,
              averagePing: getAveragePing(socket.timestamps)
            }, cb)
          }
        ], function(err){
          console.log(err);
        });
      });
    });
  });
};
