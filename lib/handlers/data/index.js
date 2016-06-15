var async = require('async');
var mongoose = require('mongoose');
var Data = mongoose.model('Data');
var fs = require('fs');
var file = fs.readFileSync('./FileName');

module.exports.post = function(req, res, next) {
  async.waterfall([
    function checkArguments(cb) {

    },
    function createData(cb) {

    },
    function sendStatus(data, cb) {
      res.send(200, {status: ok});
    }
  ], next);
};

module.exports.get = function(req, res, next) {
  var time = req.time;
  async.waterfall([
    function checkArguments(cb) {
      console.log(req.time());
      var arguments = JSON.parse(new Buffer(req.headers.metadata, 'base64').toString('ascii'));
      console.log(arguments);
      cb(null);
    },
    function sendFile(cb) {
      res.send(200, file);
      console.log(req.time());
      cb(null);
    }
  ], next);
};
