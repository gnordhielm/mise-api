var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser')
    // ,passport = require("passport")

// Require controllers
var recipes = require('../controllers/recipes')

// Helpers


// Routes

router.route('/')
	.get(function(req, res) {res.json({message: 'Welcome to the Mise API. Please visit * https://github.com/gnordhielm/mise-api#api-endpoints * for documentation.'})})

router.route('/recipes')
  .get(recipes.index)
  .post(recipes.create)

router.route('/recipes/:id')
  .get(recipes.inspect)
  .patch(recipes.update)
  .delete(recipes.destroy)

module.exports = router