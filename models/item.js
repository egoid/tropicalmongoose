'use strict'

var fs = require('fs');

var mongoose = require('mongoose');

var item = mongoose.Schema({
  item: String,
  value: String,
  createdAt: String,
});

var Item = mongoose.model('Item', item );

module.exports = Item;