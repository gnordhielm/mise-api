const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = function (req, res, next) {

	// make sure an authorization header exists
	if (!req.headers.authorization) {
		return res.json({error: 'Missing authorization header!'})
	}

	// get the last part of the auth header string: "bearer token-value"
	var token = req.headers.authorization.split(' ')[1]

	// decode the token using JWT_SECRET
	return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
	
		// if there is an error verifying
		if (err) { 
			return res.json({error: 'JWT verification error.'}) 
		}

		var userId = decoded.sub

		// check if that user exists
		return User.findById(userId, (userErr, user) => {

			if (userErr || !user) {
				return res.json({error: 'Database error when looking for user.'})
			
			// success! move on with your day.
			} else {
				return next()
			}

		})
	})

}