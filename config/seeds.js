require('dotenv').config()

var mongoose = require('./database'),
	Recipe = require('../models/recipe'),
	recipes = require('./seeds_basic')

Recipe.remove({}, function(err){
	if (err) throw err
	console.log('Cleared recipes.')
	Recipe.create(recipes, function(err, recipes){
		if (err) throw err
		console.log(`Seeded ${recipes.length} recipes to the database.`)

		mongoose.connection.close()
        process.exit()
	})
})