var mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
	title: { type: String, required: true },
	subtitle: String,

	attribution: String,
	is_public: { type: Boolean, default: false },
	is_cml: { type: Boolean, default: false },
	created_at: Number,

	body: { type: String, required: true },
})

var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe