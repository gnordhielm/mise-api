var express = require('express')
var router = express.Router()


// Require controllers
var recipes = require('../controllers/recipes')


// Routes

router.route('/')
	.get(function(req, res) {res.json({message: 'Welcome to the Mise API. Please visit * https://github.com/gnordhielm/mise-api * for documentation.'})})

router.route('/recipes')
  .get(recipes.index)

router.route('/recipes/:id')
  .get(recipes.inspect)

module.exports = router