// requires
require('dotenv').config();

var express = require('express');
var app = express();
var index = require('./modules/routes/index');



// uses
app.use(express.static('public'));
app.use('/', index);


// globals
var port = process.env.PORT || 8888;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
}); // end spin up
app.use(function(req, res) {
  res.sendFile('index.html', {
    root: 'public/views/'
  });
});
