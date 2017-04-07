var mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
	name: String,
	ingredients: String,
	directions: String
})

var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe