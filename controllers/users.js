var User = require('../models/user')

function inspect(req, res){  
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.json({message: 'Could not find user.', error: err})
    } else if (!user) { 
      res.json({message: 'No such user.'})
    } else {
      res.json(user)
    }
  })
}


// function create(req, res) {

//   var user = new User(req.body)

//   user.save(function(err, user) {
//     if (err) {
//       res.json({message: 'Could not create user.', error: err})
//     } else {
//       res.json({success: true, email: user.email, password: user.password})
//     }
//   })
// }

function update(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err || !user) res.json({message: 'Could not find user.'})

    if (req.body.name) user.name = req.body.name
    if (req.body.email) user.email = req.body.email
    if (req.body.handle) user.handle = req.body.handle

    if (req.body.is_professional) user.is_professional = req.body.is_professional
    // if (req.body.recipes) user.recipes.push(req.body.recipes)

    user.save(function(err, user) {
      if (err) {
        res.json({message: 'Could not update user.', error: err})
      } else {
        res.json(user)
      }
    })
  })
}

function destroy(req, res){
  User.remove({_id: req.params.id}, function(err) {
    if (err) {
      res.json({message: 'Could not delete user.', error: err})
    } else {
      res.json({message: 'User deleted.'})
    }
  })
}

// Exports

module.exports = {
  inspect: inspect,  
  // create: create,  
  update: update,  
  destroy: destroy
}