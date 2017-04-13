var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var validator = require('validator')
var _ = require('lodash')

var User = require('../models/user')

// import controllers
var users = require('../controllers/users')

router.get('/', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router