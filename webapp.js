require('pmx').init();

var fs = require("fs"),
		express = require('express'),
		app 	= express(),
		compress = require('compression'),
		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port,
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		multer  = require('multer'),
		multer_cfg = require('./backend/multer.config'),
		rest = require('./backend/rest'),
		frontend = require('./backend/frontend'),
		deploy = require('./backend/deploy');

if(mode === 'P') port = 80;
else port = 3000;

app.use(compress());
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer(multer_cfg));

mongoose.connect('mongodb://localhost/getflatBase');

// Interface
var frontendRoutes = [
	'/', '/f/:id', '/new'
];
frontendRoutes.forEach(function(route) {
	app.get(route,frontend);
});

// API
app.use('/rest', rest);

// deploy when push
app.all('/deploy', deploy);

app.listen(port);

console.info('GETFLAT Server at',port);
