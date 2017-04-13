var express      = require('express')
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

// configure and initialize passport with local authentication strategies
app.use(passport.initialize())
passport.use('local-signup', require('./authentication/local-signup'))
passport.use('local-login', require('./authentication/local-login'))

// protect internal routes
app.use('/internal', require('./authentication/auth_check'))

// set up routes
app.use('/', require('./routes/public_routes'))
app.use('/internal', require('./routes/internal_routes'))
app.use('/auth', require('./routes/auth_routes'))

// listen on port variable
app.listen(port, function(){
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})