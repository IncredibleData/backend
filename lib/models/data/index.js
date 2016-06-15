'use strict';

var mongoose = require('mongoose');
var DataSchema = require('./schema');

DataSchema.methods = require('./methods.js');

module.exports = mongoose.model('Data', DataSchema);
