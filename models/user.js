var mongoose = require('mongoose'),
	Recipe = require('./recipe'),
	bcrypt = require('bcrypt-nodejs'),
	uniqueValidator = require('mongoose-unique-validator')

// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	handle: { type: String, required: true, unique: true, maxlength: 15 },
	is_professional: { type: Boolean, default: false },
	// password: { type: String, required: true },
	recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
})

// Apply the uniqueValidator plugin to userSchema. 
userSchema.plugin(uniqueValidator)

// userSchema.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }

// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password)
// }

var User = mongoose.model('User', userSchema)

module.exports = User