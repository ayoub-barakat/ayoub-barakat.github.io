var bodyParser = require('body-parser')
var router = require('express').Router()

router.use(bodyParser.urlencoded()) // to support URL-encoded bodies
router.use(bodyParser.json()) // to support JSON-encoded bodies
router.use('/', require('./static'))

module.exports = router
