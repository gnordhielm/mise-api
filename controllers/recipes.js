var Recipe = require('../models/recipe')

function index(req, res){  
  Recipe.find({}, function(err, recipes) {
    if (err) throw err
    res.json(recipes)
  })
}

function inspect(req, res){  
  Recipe.findById(req.params.id, function(err, recipe) {
    if (err) res.json({message: 'Could not find recipe.', error: err})
    if (!recipe) res.json({message: 'No such recipe.'})

    res.json(recipe)
  })
}

function create(req, res) {
  var recipe = new Recipe(req.body)
  recipe.save(function(err, recipe) {
    if (err) res.json({message: 'Could not create recipe.', error: err})
    res.json(recipe)
  })
}

function update(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    if (err || !recipe) res.json({message: 'Could not find recipe.'})

    if (req.body.name) recipe.name = req.body.name
    if (req.body.ingredients) recipe.ingredients = req.body.ingredients
    if (req.body.directions) recipe.directions = req.body.directions

    recipe.save(function(err, recipe) {
      if (err) res.json({message: 'Could not update recipe.', error: err})
      res.json(recipe)
    })
  })
}

function destroy(req, res){
  Recipe.remove({_id: req.params.id}, function(err) {
    if (err) res.json({message: 'Could not delete recipe.', error: err})
    res.json({message: 'Recipe deleted.'})
  })
}

// Exports

module.exports = {
  index: index,  
  inspect: inspect,  
  create: create,  
  update: update,  
  destroy: destroy
}