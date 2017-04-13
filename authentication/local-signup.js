
var LocalStrategy = require('passport-local').Strategy
var User = require('../models/user')
var jwt = require('jsonwebtoken')

module.exports = new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	session: false,
	passReqToCallback: true

}, function(req, email, password, done) {
	process.nextTick(function() {
		// look for a user with the given email
		return User.findOne({ 'email' : email }, function(err, user) {
			// if there is a problem connecting with the database
			if (err) {
				return done({database: 'Databse error.'})

			// if there is a user with the given email
			} else if (user) {
				return done({email: 'That email is already registered.'})
			
			// ideal case, there is no email, no database problem
			} else {

				// Create a new user
				var newUser = new User()

				newUser.name = req.body.name
				newUser.email = req.body.email
				newUser.handle = req.body.handle
				newUser.is_professional = req.body.is_professional
				newUser.password = newUser.encrypt(password)

				// Have a go at saving it
				newUser.save(function(err, user) {
					if (err) {
						return done({database: err})

					// if everything works, log the mofo in.
					} else {

						// generate the JWT
						var payload = {
							sub: user._id
						}

						var token = jwt.sign(payload, process.env.JWT_SECRET)

						return done(null, token)
					}
				})
			}
		})
	})
})


