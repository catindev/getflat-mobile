var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var photoSchema = new Schema({
  "_id": {
      type: String,
      unique: true,
      index: true,
      'default': shortid.generate
  },
  "date": Date,
  "images": Array
});


photoSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.date = currentDate;
  next();
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
