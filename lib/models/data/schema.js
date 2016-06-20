'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
 * Schema
 */
var DataSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  ssid: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    index: '2d'
  },
  averagePing: {
    type: Number
  }
});

module.exports = DataSchema;
