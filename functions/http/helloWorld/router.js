const router = require('express').Router()
const helloWorld = require('./controllers/helloWorld')

router.use('/*', helloWorld)

module.exports = router
