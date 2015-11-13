'use strict'

var express = require('express');
var router = express.Router();

var NewMessage = require('../models/NewMessage')


router.post('/',function(req,res){
  var post = new NewMessage(req.body);
  post.save(function(err){
    if(err){return(err)};
      res.send(post);
    
    })
  })
