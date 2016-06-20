var async = require('async');
var mongoose = require('mongoose');
var Data = mongoose.model('Data');

module.exports.get = function(req, res, next) {
  var time = req.time;
  async.waterfall([
    function checkArguments(cb) {
    },
  ], next);
};
