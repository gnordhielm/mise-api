const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = function (req, res, next) {

	var token = req.body.token
	// decode the token using JWT_SECRET
	return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
	
		// if there is an error verifying
		if (err) { 

			return res.json({error: 'JWT signature does not match.'}) 
		} else {

			var userId = decoded.userId

			// check if that user exists
			return User.findById(userId, (userErr, user) => {

				if (userErr || !user) {
					return res.json({error: 'Database error when looking for user.'})
				
				// success! move on with your day, passing the user id
				} else {
					req.userId = userId
					return next()
				}

			})
		}
	})
}