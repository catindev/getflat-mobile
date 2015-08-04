var express = require('express');
var router = express.Router();
var Flat = require('./flat');
//var User = require('./user');
var cloudinary = require('./cloudinary');
var pmx = require('pmx');
var apicache = require('apicache');
var cache = apicache.middleware;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'getflat.me');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

router.use(allowCrossDomain);

router.get('/flats', cache('1 hour'), function(request,response){
	var latest = request.query.latest || 10;
	var tf = new Flat();
	var query = tf.querySanitizer(request.query);
	Flat.find(query).sort('-date').limit(latest).exec(function(err, flats){
	    return response.json(flats);
	});
});

router.get('/flats/:id', cache('1 hour'), function(request,response){
	Flat.findById(request.params.id, function (err, flat) {
     if (err) return next(err);
     return response.json(flat);
   });
});

router.post('/flats',function(request,response){
	var newFlat = new Flat(request.body);
	newFlat.getFull();
	newFlat.getShort();
	newFlat.save(function(err, flat) {
	  if (err) throw err;
    pmx.emit('flats:new', flat);
	  return response.json(flat);
	});
});

// router.get('/users', cache('1 hour'), function(request,response){
//   var Token = request.query.token || null;
// 	User.findOne({ token: Token }, function (err, user){
//     if (err) return next(err);
//     return response.json(user);
//   });
// });
//
// router.put('/users', function(request,response){
//   var nu = new User();
// 	var query = nu.querySanitizer(request.query);
//   User.update(query, { $set: query },
//     function (err, user){
//       if (err) return next(err);
//       console.log(user);
//       return response.json(user);
//     });
// });
//
// router.post('/users',function(request,response){
// 	var newUser = new User(request.body);
// 	newUser.save(function(err, user) {
// 	  if (err) throw err;
//     pmx.emit('users:new', user);
// 	  return response.json(user);
// 	});
// });

router.post('/images',function(request,response){
  cloudinary(request.files.photo.path, function(image){
    response.json(image);
  });
});

module.exports = router;
