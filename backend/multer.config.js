var shortid = require('shortid');
var fs = require('fs');
var async = require('async');
var gm = require('gm').subClass({ imageMagick: true });
var asyncTasks = [];

module.exports = {
	dest: './assets/images/',
	rename: function (fieldname, filename) {
	  return shortid.generate()+Date.now();
	},
	// onFileUploadStart: function (file) {
	// 	//console.log(file.originalname + ' is starting ...')
	// },
	onFileUploadComplete: function (file) {
		fs.readFile(file.path, function (err, image ) {
			//asyncTasks.push(function(callback){
				gm(image, file.path)
		        .resize(350)
		        .write(file.path, function(err) {
		            if(err) console.log('Error writing file to disk: ' + err);
		        });
			//});
		});
	}
};
