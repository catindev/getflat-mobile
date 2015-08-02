var fs = require('fs');
var shortid = require('shortid');
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'getflat',
  api_key: '941962673291718',
  api_secret: '8kAZtyBmkwUDL1b2NIzBmHbgwRY'
});

module.exports = function(path, callback) {
  var ID = shortid.generate()+Date.now();
  var options = {
    public_id: ID,
    crop: 'limit',
    width: 500
  };

  cloudinary.uploader.upload(
    path,
    function(image) {
      fs.unlink(path, function() {
          callback({ id: ID, url: image.url });
      });
    },
    options
  );

};
