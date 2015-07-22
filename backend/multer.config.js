var shortid = require('shortid');

module.exports = {
	dest: './assets/images/',
	rename: function (fieldname, filename) {
		console.log('field',fieldname);
	  return shortid.generate()+Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...')
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path)
		done=true;
	}
};
