
var express = require('express'),
	app 	= express();

app.use(express.static('assets'));

app.get('/*', express.static( __dirname + '/../' ));

app.listen(3000);

console.info('Webapp Test Server');



