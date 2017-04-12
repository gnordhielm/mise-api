var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var validator = require('validator')
var _ = require('lodash')


// import controllers
var users = require('../controllers/users')

// Authentication routes

router.route('/')
	.get(function(req, res) {res.json({message: 'Internal API root.'})})

router.route('/users')
	.post(signup)

router.route('/login')
	.post(login)

// router.route('/users/:id')
// 	.get(users.inspect)
// 	.patch(users.update)
// 	.delete(users.destroy)


///// Actions

// Sign up
function signup(req,res) {
	var validate = validateSignup(req.body)
	if (validate.success) {
		res.json({success: true, email: req.body.email, password: req.body.password})
	} else {
    	res.json(validate)
	}
}

// Log in
function login(req,res) {
	var validate = validateLogin(req.body)
	if (validate.success) {
		res.json({success: true})
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

	if (!data || typeof data.password !== 'string' || data.password.trim().length < 6) {
		errors.password = 'Your password must be at least 6 characters long.'
	}

	if (!data || typeof data.handle !== 'string' || data.handle.trim().length === 0 || data.handle.trim().length > 15) {
		errors.handle = 'Please provide a handle with between 1 and 16 characters.'
	}

	return {
		success: _.isEmpty(errors),
		errors
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

	return {
		success: _.isEmpty(errors),
		errors
	}
}


module.exports = router