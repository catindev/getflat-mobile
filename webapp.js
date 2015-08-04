require('pmx').init();

var fs = require("fs"),

		compress = require('compression'),
		express = require('express'),
		app 	= express(),
		bodyParser = require('body-parser'),
		multer  = require('multer'),
		multer_cfg = require('./backend/multer.config'),
		cookieParser = require('cookie-parser'),
		clientSessions = require("client-sessions"),

		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port,

		mongoose = require('mongoose'),


		rest = require('./backend/rest'),
		frontend = require('./backend/frontend'),
		deploy = require('./backend/deploy');

		var uuid = require('node-uuid');

if(mode === 'P') port = 80;
else port = 3000;

app.use(compress({ threshold: 0 }));
app.use(cookieParser());
app.use(clientSessions({ cookieName: 'client', secret: 'SuchSecretMuchString!Wow!' }));
app.use('/assets', express.static('assets', { maxAge: 86400 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer(multer_cfg));
app.use(require('prerender-node').set('prerenderToken', 'VVl6l7QEaxLcRfKkKhYY'));

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

app.all('/test', function(req, res){ res.json(req.query); });

app.listen(port);

console.info('GETFLAT Server at',port);
