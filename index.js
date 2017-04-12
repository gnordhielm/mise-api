var express      = require('express')


var mongoose     = require('mongoose')
var path         = require('path')
var favicon      = require('serve-favicon')
var logger       = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser   = require('body-parser')
var session      = require('express-session')
var cors         = require('cors')
var port         = process.env.PORT || 3000

// load env variable from .env file
require('dotenv').config()
// dotenv.load()

// create express app
var app = express()

// set up public directory path and favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(__dirname + '/public'))

// connect to database
var mongoose = require('./config/database')

// set up cross-origin resource sharing
app.use(cors())

// load parsers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// load logger
app.use(logger('dev'))

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