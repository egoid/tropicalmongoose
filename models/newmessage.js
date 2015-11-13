'use strict'

var fs = require('fs');

var mongoose = require('mongoose');

var newpost = mongoose.Schema({
  post: String,
  time: String,
});

var NewMessage = mongoose.model('NewMessage', newpost );

module.exports = NewMessage;