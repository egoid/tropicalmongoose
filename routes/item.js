'use strict'

var express = require('express');
var router = express.Router();

var Item = require('../models/item')

// router.get('/:id', (req,res) => {
//   Item.findById(req.params.id, function(err, item) {
//     res.status(err ? 400 : 200 ).send('item not found' || item);
//   })
// })

// router.get('/:id', (req,res) => {
//   Item.findByIdAndUpdate(req.params.id , 'xxx' , function(err,item){
//     res.status(err ? 400 : 200).send('updated ya' || item)
//   })
// })
router.get('/:id', function(req,res) {
  Item.findById(req.params.id, function(err,item){
    if (err) res.send(err);
    console.log(item)
    res.send(item);
  })
})

router.put('/:id', function(req,res){
  Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err,item){
    if (err) res.send(err);
  })
})

//findbyid and rmove

// router.get('/:id',function(req,res){
//   Item.findByIdAndUpdate(req.params.id, 12345 ,function(err,item){
//     if (err) res.send(err);
//     res.send(item);
//   })
// })


//Item.update([query],[new data])
//item.findByIdAndUpdate([id], [new data], cb)

// router.get('/',function(req,res)=> {
//   Item.find({}, function(err, items){
//     res.status(err ? 400 : 200).send(err || items);
//   }
// })

router.get('/',function(req,res){
  Item.find({}, function(err,item){
    if (err) send(err);
    res.send(item)
  })
})

router.post('/',function(req,res){
  let item = new Item(req.body);
  item.save(function(err,item){
    if (err) return(err);
    res.send(item);
  })
})

// router.post('/',function(req,res) =>{
//   let Item = new Item(req.body);
//   item.save(err => {
//     res.status(err ? 400 : 200).send(err || "${req.body.name} added." );
//   })
// })

module.exports = router;