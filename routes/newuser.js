'use strict'

var express = require('express');
var router = express.Router();
var newUser = require('../models/newuser')
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.create = function(req,res){
  new newUser({user:req.user , pass:req.pass}).save
}

router.get('/',function(req,res){
  var x = req.query.user ; 
  var y = req.query.pass ; 
  newUser.findOne({ user:x , pass:y}, function(err,data){
    if (err) {res.send(err)};
    if (!err) {res.send(data)}
  })
})
    // NewMessage.find({}, function(err, users){
    // if (err) throw err;    
    //   res.send(users); 
    // })

// })



router.post('/',function(req,res){
  var user = new newUser(req.body)
  user.save(function(err){
    if (err) return(err);
    res.send(user);
    console.log(user)
  })
})
module.exports = router;

// router.post('/',function(req,res){
//   var Add = new Add(req.body);
//   car.save(function(err,savedCar){
//     res.send(savedCar);
//   })
// })

// router.put('/',function(req,res){

//   Car.findByIdAndUpDate( req.body.__id , req.body , function(err,car){
//   res.send(car);
//  }
// })

// router.put('')


