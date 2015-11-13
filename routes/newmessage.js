'use strict'

var express = require('express');
var router = express.Router();

var NewMessage = require('../models/NewMessage')

router.create = function(req,res){
  new NewMessage({post:req.post , time:req.time}).save
}


router.get('/',function(req,res){
    NewMessage.find({}, function(err, users){
    if (err) throw err;    
      res.send(users); 
    })

})



router.post('/',function(req,res){
  // var post = new NewMessage({
    var post = new NewMessage({
      post: req.body.post,
      time: req.body.time })
  // })
  // console.log(post)
  post.save(function(err){
    if(err){return(err)};
      res.send(post);
      console.log(post)
    
    })
  })


  // user.save(function(err){
  //   if (err) return(errr);
  //   res.send(user);
  //   console.log(user)
  // })
module.exports = router;