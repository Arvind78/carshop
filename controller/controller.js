const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const userModel = require('../model/userModel')
const dealerModel = require("../model/dealerModel")
const carModel = require("../model/carsModel")
const enquarymodel =require("../model/enquarys")
const jwt = require('jsonwebtoken')

//User signup route controller

const signup = async(req,res,next)=>{
    console.log(req.body)
 const {username,email,password}= req.body;
 
 if(!username||!email||!password ){
  res.status(401).json({massage:'all field is requred!', sucess:false});
  return false;
 }
 const checkUser = await userModel.findOne({email})

 if(checkUser){
  res.status(403).json({massage:'user aleardy ragisterd!', sucess:false});
    return false;
};
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({...req.body,password:hashPassword})
 res.status(200).json({massage:"user has been created!" ,sucess:true})

}  

 //user login routes controllor
const signin =async(req,res,next)=>{
  
        const user = await userModel.findOne({email:req.body.email});
       if(!user){
          res.status(404).json({massage:"user not found!" , sucess:false})
         return false;
       };
        const passwordCheck = await bcrypt.compare(req.body.password,user.password);
        if(!passwordCheck){
            res.status(401).json({massage:"email or password wrong" , sucess:false})
            return false;
          };
        
        const token = jwt.sign({user},process.env.Scretkey);
        res.status(200).json({token,massage:'login sucessfully', sucess:true})
    

}

const addCars = async(req,res)=>{
         console.log(req.body)
         console.log(req.file)
}

const enquary = async(req,res)=>{
 
}

const dealersignup = async(req,res)=>{
  console.log(req.body)
  const {email,password} = req.body;
  if(!email||!password ){
    res.status(500).json({massage:"invalid deteils"})
  }
  const user = await dealerModel.findOne({email});
   if(user){
    res.status(404).json({massage:"user already signup"})

   }
   const hashPassword = await bcrypt.hash(password,10)
   const newUser = await dealerModel.create({
      email,
      password:hashPassword
   });
   res.status(200).json({massage:"account created "})

}
// {===================================================================}
const dealer = async(req,res)=>{
  const {email,password} = req.body;
  if(!email||!password ){
    res.status(500).json({massage:"invalid deteils"})
  }
  const user = await dealerModel.findOne({email});
   if(!user){
    res.status(404).json({massage:"user not found"})
   }
   const checkPassword= await bcrypt.compare(password,user.password);
   if(!checkPassword){
    res.status(500).json({massage:"email or password invalid"})
   } 
    const token = jwt.sign({user},process.env.Scretkey);
    res.status(200).json({token,massage:'login sucessfully'})
    
}

module.exports= {
    signup,signin,addCars,enquary,dealersignup,dealer
}


