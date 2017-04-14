var express = require('express')
var router = express.Router()


var User = require('../models/user')

// import controllers
var users = require('../controllers/users')
var recipes = require('../controllers/recipes')

router.post('/', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.post('/user-data', users.inspect)
router.post('/new-recipe', recipes.create)


module.exports = router