'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser')

mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://localhost/message');

var app = express();
app.set('view engine','jade');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(morgan('dev'));

app.use('/', require('./routes/index'));
app.use('/newuser', require('./routes/newuser'));
app.use('/newmessage', require('./routes/newmessage'));
app.use('/item',require('./routes/item'))

app.use(function(req,res){
  res.status(404).render('404')
});

app.listen(PORT,function(){
  console.log('Listening on port', PORT );
})