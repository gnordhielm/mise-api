var express = require('express')
var router = express.Router()


var User = require('../models/user')

// import controllers
var users = require('../controllers/users')

router.post('/', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.post('/user-data', users.inspect)


module.exports = router