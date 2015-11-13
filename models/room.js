'use strict'

var fs = require('fs');

var mongoose = require('mongoose');

let Room;

var item = mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

var Item = mongoose.model('Item', item );

module.exports = Item;