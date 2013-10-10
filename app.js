var mongoose = require('mongoose');
var express = require('express');

var routes = require('./routes');
var middleware = require('./middleware');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost', function(err){

	if(err) throw err;
	console.log('connected');

	var app = express();
	//	app.set('view engine', 'jade');
	//	pass app to the routes function
	middleware(app);
	routes(app);

	app.listen(3003, function(){
		console.log('server running on port 3003');
	});

	//	mongoose.disconnect();
});
