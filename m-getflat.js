
var fs = require("fs"),
		express = require('express'),
		app 	= express(),
		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port,
		mongoose = require('mongoose'),
		bodyParser = require('body-parser');

if(mode === 'P') port = 80;
else port = 3000;

// use section
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   console.log('Client IP:', ip);
//   next();
// });

mongoose.connect('mongodb://localhost/getflatBase');
var Flat = require('./backend/flat');


function frontend(request,response) {
	var fileStream = fs.createReadStream(__dirname + '/index.html');
	fileStream.on('data', function (data) { response.write(data); })
	fileStream.on('end', function() { response.end(); })
}

app.get('/',frontend);
app.get('/f/:id',frontend);
app.get('/n',frontend);

// API
app.get('/rest/flats',function(request,response){
	var latest = request.query.latest || 10;
	Flat.find({}).sort('-date').limit(latest).exec(function(err, flats){
	    return response.json(flats);
	});
});

app.get('/rest/flats/:id',function(request,response){
	Flat.findById(request.params.id, function (err, flat) {
     if (err) return next(err);
     return response.json(flat);
   });
});

app.post('/rest/flats',function(request,response){
	var newFlat = new Flat(request.body);
	newFlat.getFull();
	newFlat.getShort();
	newFlat.save(function(err, flat) {
	  if (err) throw err;
	  return response.json(flat);
	});
});

app.listen(port);

console.info('GETFLAT Server at',port);
