const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const homeRoute = require('./routes/home.route')
const userRoute = require('./routes/user.route')
let app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// home route
app.use(homeRoute)
// user route
app.use(userRoute)

// server connect
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/userDB')
        console.log('server is connect');
    }catch(error){
        console.log(`server is not connect`)
        console.log(error);
    }
}
connectDB()


// error pages
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 pages is not foud</h1>')
})

// server error
app.use((error,req,res,next)=>{
    res.status(500).send('<h1>server error</h1>')
})

module.exports = app;