var fs = require("fs");
module.exports = function (request,response) {
	var fileStream = fs.createReadStream(__dirname.replace('backend', '') + '/index.html');
	fileStream.on('data', function (data) { response.write(data); })
	fileStream.on('end', function() { response.end(); })
};
