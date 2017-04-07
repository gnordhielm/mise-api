var express      = require('express'),
    mongoose     = require('mongoose'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    port         = process.env.PORT || 3000

// load env variable from .env file
require('dotenv').config()

// create express app
var app = express()

// set up public directory path and favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(__dirname + '/public'))

// connect to database
var mongoose = require('./config/database')

// load general middleware
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())


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
var routes = require('./config/routes')
app.use('/api/', routes)

// listen on port variable
app.listen(port, function(){
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})