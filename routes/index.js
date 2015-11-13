'use strict'

var express = require('express');
var router = express.Router();
var NewMessage = require('../models/NewMessage')





router.get('/',function(req,res){
    NewMessage.find({}, function(err, users){
    if (err) throw err;
    
    res.render('index')
    })

});




module.exports = router;