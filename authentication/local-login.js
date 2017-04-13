var LocalStrategy = require('passport-local').Strategy
var User = require('../models/user')
var jwt = require('jsonwebtoken')

module.exports = new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: false,
		passReqToCallback: true
	}, function(req, email, password, done){

		// look for a user with the given email
		return User.findOne({ 'email': email }, function(err, user) {

			// if there was a problem searching the database
			if (err) {
				return done({database: 'Database error.'})

			// if no user was found with that email
			} else if (!user){
				return done({email: 'That email is not registered.'})

			// if the password doesn't match the that of user we found
			} else if (!user.validPassword(password)){
				return done({password: 'Wrong password.'})

			// no problems
			} else {

				// generate the JWT
				var payload = {
					sub: user._id
				}

				var token = jwt.sign(payload, process.env.JWT_SECRET)
				var data = {
					id: user._id,
					email: user.email
				}

				return done(null, token, data)
			}
		})
	})