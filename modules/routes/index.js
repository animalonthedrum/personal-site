var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brettsitemailer@gmail.com', //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
    pass: 'mySite#8888' //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
  }
});

router.post('/', function(req, res) {
  var mailer = req.body;
  console.log(mailer);



  var mailOptions = {
    //example: from: '"Scott" scott@primeacademy.io',
    from: '"Brett" brettsitemailer@gmail.com', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
    to: 'miller.brett.andrew@gmail.com',
    subject: mailer.subject, // Subject line
    text: mailer.message, // plain text body
    html: '<p>' + 'name: ' + mailer.name + '<br>' + 'message: ' + mailer.message + '<br>' + 'email: ' + mailer.email + '</p>' // html body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  res.sendStatus(200);
});

router.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
