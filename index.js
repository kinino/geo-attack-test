var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var three = require('three');
var fs = require('fs');

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

app.get('/joystick', function(request, response) {
  response.render('pages/joystick');
});

app.get('/manifest.json', function(request, response) {
  response.send(fs.readFileSync('views/pages/manifest.json', "utf-8"));
});

app.get('/ground', function(request, response) {
  response.render('pages/ground');
});

app.get('/test', function(request, response) {
  response.render('pages/test');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var aux;
var aux2;

/*var threeOBJ = require("three-obj")();

threeOBJ.convert("./public/obj/space_craft_2.obj", "./public/js/space_craft_2.js", function( response ){
	console.log( "File saved at: public/js/space_craft_2.js"  );
});*/
