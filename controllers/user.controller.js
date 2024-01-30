
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


// console.log(md5("message"));
// get user controller
const getUser = async (req,res)=>{
    try{
        const allUser = await User.find()
       res.status(200).send(allUser)
    }catch(error){
        console.log(`error hear ${error}`);
    }
}

// post user controller
const postUser = async (req,res)=>{
    const {name,email,password} = req.body;
    try{
       const newUser = new User({
           name : name,
           email: email,
           password:password
       }) ;
       await newUser.save()
        res.status(201).send({name,email,password})
    }catch(error){
        console.log(error);
    }
}

const postLoginUser =async (req,res)=>{
    try{
        const {email,password} = req.body
       let user = await User.findOne({email:email})
       if(user && user.password == password){
        res.status(200).send('valid is user')
       }else{
        res.status(404).send('not valid user')
       }
    }catch(error){
        res.send('server error')
    }
}

module.exports = {getUser,postUser,postLoginUser}