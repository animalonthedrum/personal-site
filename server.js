// requires
var express = require('express');
var app = express();
var nodemailer = require("nodemailer");
var index = require('./modules/routes/index');


// uses
app.use(express.static('public'));
app.use('/', index);



// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'brettsitemailer@gmail.com',
//     pass: 'mysite8888'
//   }
// });


// globals
var port = process.env.PORT || 8888;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
}); // end spin up
