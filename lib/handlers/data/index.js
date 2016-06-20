var async = require('async');
var mongoose = require('mongoose');
var Data = mongoose.model('Data');

module.exports.get = function(req, res, next) {
  async.waterfall([
    function checkArguments(cb) {

    },
    function sendData(cb) {

    }
  ], next);
};
