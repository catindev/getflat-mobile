
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
		google = require('googleapis');

if(mode === 'P') port = 80;
else port = 3000;

mongoose.connect('mongodb://localhost/getflatBase');

app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer(multer_cfg));



// Interface
function frontend(request,response) {
	var fileStream = fs.createReadStream(__dirname + '/index.html');
	fileStream.on('data', function (data) { response.write(data); })
	fileStream.on('end', function() { response.end(); })
};

app.get('/',frontend);
app.get('/f/:id',frontend);
app.get('/n',frontend);

// API
app.use('/rest', rest);

app.listen(port);

console.info('GETFLAT Server at',port);
