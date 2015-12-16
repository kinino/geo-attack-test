var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var three = require('three');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/main', function(request, response) {
  response.render('pages/main');
});

app.get('/controls', function(request, response) {
  response.render('pages/controls');
});

app.get('/rotation', function(request, response) {
  response.render('pages/rotation');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
