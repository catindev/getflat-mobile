// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

// create a schema
var flatSchema = new Schema({
  "_id": {
      type: String,
      unique: true,
      index: true,
      'default': shortid.generate
  },
  "date": Date,
  "address":{
    "country": String,
    "city": String,
    "street": String,
    "home": String,
    "full": String,
    "short": String
  },
  "cost": Number,
  "type": String,
  "size": String,
  "contacts": {
    "name": String,
    "phone": String
  },
  "comment": String,
  "photo": String
});

flatSchema.methods.getFull = function() {
  this.address.full = this.address.city + ', ' + this.address.street + ', ' + this.address.home;
  return this.address.full;
};

flatSchema.methods.getShort = function() {
  this.address.short = this.address.street + ', ' + this.address.home;
  return this.address.short;
};

flatSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.date = currentDate;
  next();
});

var Flat = mongoose.model('Flat', flatSchema);

module.exports = Flat;
