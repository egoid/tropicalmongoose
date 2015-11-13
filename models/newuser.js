'use strict'

var fs = require('fs');

var mongoose = require('mongoose');

var newUser = mongoose.Schema({
  user: String,
  pass: String,
});

var User = mongoose.model('User', newUser );

module.exports = User;