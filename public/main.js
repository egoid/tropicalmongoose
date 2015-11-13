'use strict'

$(document).ready(init)

function init() {

  $('#register').click(register)
  $('#submitpost').click(post)
  $('#login').click(login);

  $.get('/newmessage', msg)

}

let buser;

function login(){

  var user = $('#loginuser').val();
  var pass = $('#loginpass').val();

  var userAuth = ({'user':user , 'pass':pass})
  console.log(userAuth)
  $.get('/newuser',userAuth,function(data,err){
    if(err) console.log('f');


    $('#post').animate({opacity:100});
    $('.login').animate({opacity:0});
    $('p#afterlogin').text('Welcome........' + user)
    $('p#afterlogin').animate({opacity:100})

    buser = user;
  })

}
function register(){
  var newuser = $('#newuser').val();
  var newpw = $('#newpw').val();
  var sendnew = ({'user':newuser , 'pass':newpw});
  $.post('/newuser',sendnew);

  buser = newuser;

  $('#post').animate({opacity:100});
  $('.login').animate({opacity:0});
  $('p#afterlogin').text('Welcome........' + newuser)
  $('p#afterlogin').animate({opacity:100})

}

function msg(data){
  data.forEach(function(x,i,arr){

  var utcDate = x.time
  var post = x.post

  var $clone = $('#incoming').clone();
  $clone.removeAttr('id');
  $clone.text('posted by '+'master'+' on '+utcDate)
  $clone.appendTo($('#append'));
  var msg = $('p#incomingmsg').clone();
  msg.removeAttr('id');
  msg.text(post);
  msg.appendTo($clone);

  // var $this = $('#incoming').clone();
  // $this.text('posted by '+ buser +' on '+utcDate)
  // var msg = $('p#incomingmsg').clone();
  // msg.text(post);
  // msg.appendTo($this);
  // $this.appendTo($('#incoming'));

  })
}



function post(){

  var dt = new Date();
  var utcDate = dt.toUTCString();
  var post = $('#message').val();

  var posted = {'post':post ,'time':utcDate}

  var $clone = $('#incoming').clone();
  $clone.removeAttr('id');
  $clone.text('posted by '+'master'+' on '+utcDate)
  $clone.appendTo($('#append'));
  var msg = $('p#incomingmsg').clone();
  msg.removeAttr('id');
  msg.text(post);
  msg.appendTo($clone);

  $.post('/newmessage',posted)
}