var async = require('async');
var mongoose = require('mongoose');
var Data = mongoose.model('Data');

module.exports.get = function(req, res) {
    Data.find({}, function(err, datas) {
      if(err) {
        res.send(err);
      }
      else {
        res.send(datas);
      }
    });
};
