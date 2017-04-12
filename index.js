var express      = require('express')
var mongoose     = require('mongoose')
var favicon      = require('serve-favicon')

var session      = require('express-session')
var cookieParser = require('cookie-parser')
var passport	 = require('passport')

var logger       = require('morgan')
var path         = require('path')
var bodyParser   = require('body-parser')
var cors         = require('cors')
var port         = process.env.PORT || 3000

// create express app
const app = express()

// load env variable from .env file
require('dotenv').config()

// set up public directory path and favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(__dirname + '/public'))

// connect to database
const mongoose = require('./config/database')

// set up cross-origin resource sharing
app.use(cors())

// load HTTP body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// load logger in development
app.use(logger('dev'))

// configure passport
app.use(passport.initialize())

///// Passport - move me out into another file soon

var localSignupStrategy = require('./server/passport/local-signup')
var localLoginStrategy = require('./server/passport/local-login')

// configure passport
// app.use(session({ secret: 'WHETSTONE-CODE-SHARPENING' }))
// app.use(passport.initialize())
// session implementaion
// app.use(passport.session())

// Initialize global user variable
// require('./config/passport')(passport)
// app.use(function (req, res, next) {
//   global.user = req.user
//   next()
// })

// set up routes
app.use('/', require('./config/public_routes'))
app.use('/internal/', require('./config/internal_routes'))

// listen on port variable
app.listen(port, function(){
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})