const { getUser, postUser } = require('../controllers/user.controller')

const route = require('express').Router()

// get user 
route.get('/user',getUser)
// post user
route.post('/user',postUser)

module.exports = route