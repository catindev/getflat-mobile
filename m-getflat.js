
var fs = require("fs"),
		express = require('express'),
		app 	= express(),
		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port;

if(mode === 'P') port = 80;
else port = 3000;

app.use('/assets', express.static('assets'));

function index(request,response) {
	var fileStream = fs.createReadStream(__dirname + '/index.html');
	fileStream.on('data', function (data) { response.write(data); })
	fileStream.on('end', function() { response.end(); })
}

app.get('/',index);
app.get('/f/:id',index);

// test latest
app.get('/rest/ads',function(request,response){
		var latest = require('./test/latest_ads.json');
		//console.log(request.query);
		response.json(latest);
});

app.get('/rest/flats/:id',function(request,response){
		var ad = require('./test/ad_111.json');
		response.json(ad);
});

app.listen(port);

console.info('GETFLAT Server at',port);
