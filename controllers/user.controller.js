const User = require('../models/user.model')


// get user controller
const getUser = async (req,res)=>{
    try{
      await res.send('<h1>i am user pages</h1>')

    }catch(error){
        console.log(`error hear ${error}`);
    }
}

// post user controller
const postUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
       const newUser = new User(req.body) ;
       await newUser.save()
        res.status(201).send({name,email,password})
    }catch(error){
        console.log(error);
    }
}

module.exports = {getUser,postUser}