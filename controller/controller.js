const mongoose = require('mongoose')
const error = require('../error')
const bcrypt = require('bcrypt')
const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

//User signup route controller

const signup = async(req,res,next)=>{
    console.log(req.body)
 const {username,email,password}= req.body;
 
 if(!username||!email||!password ){
    next(error(404,'all field is requred!'));
 }
 const checkUser = await userModel.findOne({email})
 if(checkUser) return next(error(403,'user aleardy ragisterd!'));
  const hashPassword = await bcrypt.hash(password,10);
 const user = await userModel.create({...req.body,password:hashPassword})
 res.status(200).json("user has been created!")

}

 //user login routes controllor
const signin =async(req,res,next)=>{
    try {
        const user = await userModel.findOne({email:req.body.email});
       if(!user) return next(error(404,"user not found!"));
        const passwordCheck = await bcrypt.compare(req.body.password,user.password);
        if(!passwordCheck) return next(error(401,"email or password not exist!"));
        const token = jwt.sign({user},process.env.Scretkey);
        res.status(200).json({token,massage:'login sucessfully'})
    } catch (err) {
        next(err)
    }

}

const addCars = async(req,res)=>{
 
}

const enquary = async(req,res)=>{
 
}

const dealer = async(req,res)=>{
 
}

module.exports= {
    signup,signin,addCars,enquary,dealer
}
