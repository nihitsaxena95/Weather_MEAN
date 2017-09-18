var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
let Query = require('../model/registerschema');
var config = require('./config');

module.exports = function(passport) {
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts,function(payload,done) {
		Query.findOne({id : payload.id}, function(err,user) {
			if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
		})
	}))
}