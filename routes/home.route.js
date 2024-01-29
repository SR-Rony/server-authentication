const { getHome } = require('../controllers/home.controller')

const route = require('express').Router()

route.get("/",getHome)

module.exports = route