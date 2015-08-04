var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uuid = require('node-uuid');
var _ = require('lodash-node');

var schema = {
  "_id": {
      type: String,
      unique: true,
      index: true,
      'default': shortid.generate
  },
  "last_visit": { type: Date, default: Date.now() },
  "token": { type: String, unique: true, index: true, default: uuid.v4() },
  "phone": String
  "name": String,
  "city": String
};

var userSchema = new Schema(schema);

userSchema.methods.querySanitizer = function(query) {
  var validKeys = [ 'phone', 'name', 'city', 'last_visit' ];
  var result = { };
  for(var key in query) {
    if(validKeys.indexOf(key) !== -1) result[key] = query[key];
  };
  if('token' in query && query.token === 'new') result.token = uuid.v4();
  return result;
};

var User = mongoose.model('User', userSchema);

module.exports = User;
