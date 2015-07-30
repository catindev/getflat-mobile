
var fs = require("fs"),
		express = require('express'),
		app 	= express(),
		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port,
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		multer  = require('multer'),
		multer_cfg = require('./backend/multer.config'),
		rest = require('./backend/rest'),
		frontend = require('./backend/frontend');

if(mode === 'P') port = 80;
else port = 3000;

mongoose.connect('mongodb://localhost/getflatBase');

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer(multer_cfg));


// Interface
var frontendRoutes = [
	'/',
	'/n',
	'/f/:id',
	'/new'
];
frontendRoutes.forEach(function(route) {
	app.get(route,frontend);
});

// API
app.use('/rest', rest);

app.listen(port);

console.info('GETFLAT Server at',port);
