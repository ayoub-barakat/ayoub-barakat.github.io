var express    = require('express')
var logger     = require('morgan')

var app = express()
app.use(logger('dev'))
app.use(require('./auth'))
app.use(require('./BackEnd'))

var server = app.listen(5000, function () {
  console.log('server listening on %d', server.address().port)
})
