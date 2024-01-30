const { getUser, postUser,postLoginUser } = require('../controllers/user.controller')

const route = require('express').Router()

// get user 
route.get('/user',getUser)
// post user
route.post('/user/register',postUser)
route.post('/user/login',postLoginUser)

module.exports = route