var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var validator = require('validator')
var passport = require('passport')
var _ = require('lodash')

var User = require('../models/user')

// Authentication routes

router.route('/')
	.get(function(req, res) {res.json({message: 'Auth API root.'})})

router.route('/signup')
	.post(signup)

router.route('/login')
	.post(login)


///// Auth Actions

// Sign up
function signup(req, res, next) {

	var validate = validateSignup(req.body)
	if (validate.success) {

		return passport.authenticate('local-signup', function(err, token) {
			if (err) {
				return res.json({
					success: false,
					errors: err
				})

			// if the whole authentication works, log the user in with a token.
			} else {
				return res.json({
					success: true,
					token: token
				})
			}
		})(req, res, next)

	} else {
    	res.json(validate)
	}
}


// Log in
function login(req, res, next) {
	var validate = validateLogin(req.body)
	if (validate.success) {

		return passport.authenticate('local-login', function(err, token) {
			if (err) {
				return res.json({
					success: false,
					errors: err
				})

			// if the whole authentication works, log the user in with a token.
			} else {
				return res.json({
					success: true,
					token: token
				})
			}
		})(req, res, next)

	} else {
    	res.json(validate)
	}
}

///// Helpers

// Validate signup data
function validateSignup(data) {
	var errors = {}

	if (!data || typeof data.email !== 'string' || !validator.isEmail(data.email)) {
		errors.email = 'Please provide a valid email address.'
	}

	if (!data || typeof data.name !== 'string' || data.name.trim().length === 0) {
		errors.name = 'Please provide a name.'
	}

	if (!data || typeof data.password !== 'string' || data.password.trim().length < 6) {
		errors.password = 'Your password must be at least 6 characters long.'
	}

	if (!data || typeof data.handle !== 'string' || data.handle.trim().length === 0 || data.handle.trim().length > 15) {
		errors.handle = 'Please provide a handle with between 1 and 16 characters.'
	}

	var areNoErrors = _.isEmpty(errors)

	return {
		success: areNoErrors,
		errors: areNoErrors ? null : errors
	}
}

// Validate login data
function validateLogin(data) {
	var errors = {}

	if (!data || typeof data.email !== 'string' || data.email.trim().length === 0) {
		errors.email = 'Please provide your email address.'
	}

	if (!data || typeof data.password !== 'string' || data.password.trim().length === 0) {
		errors.password = 'Please provide your password.'
	}

	var areNoErrors = _.isEmpty(errors)

	return {
		success: areNoErrors,
		errors: areNoErrors ? null : errors
	}
}


module.exports = router