
var fs = require("fs"),
		express = require('express'),
		app 	= express(),
		optimist = require('optimist'),
		mode = optimist.argv.m || "P", port;

if(mode === 'P') port = 80;
else port = 3000;


app.use('/assets', express.static('assets'));

app.get('/',function(request,response){
	var fileStream = fs.createReadStream(__dirname + '/index.html');
	fileStream.on('data', function (data) { response.write(data); })
	fileStream.on('end', function() { response.end(); })
});

app.listen(port);

console.info('GETFLAT Server at',port);
