const express=require('express');
const authRouter=express.Router();

const bcrypt=require('bcrypt');
const {validateSignUpData}=require("../utils/validation")
const User = require("../models/user");



authRouter.post("/signup", async (req, res) => {
 try {
   // validate of data
   validateSignUpData(req)

   const { firstName, lastName,  email,password}=req.body;
   // encript passord
const passwordHash= await bcrypt.hash(password,10);

console.log(passwordHash);

   //console.log(req.body);
   // Creating a new instance of the user Model
   const user = new User({
    firstName,
    lastName,
    email,
    password:passwordHash,
   });
   await user.save();
   res.send("User data saved successfully!!");

 } catch (error) {
  res.status(400).send("ERROR:"+error.message)
 }
});

authRouter.post("/login",async(req,res)=>{
  try {
    const {email,password}=req.body;
    const user=await User.findOne({email:email});
    if(!user){
      throw new Error("invalid credntial");
    }
   
     const isPasswordValid= await  user.validatePassword(password)
     if(!isPasswordValid){
         //create jwt token

         const token=await user.get.JWT();

         // add token to cookie and send the response back to the user
          res.cookie("token",token,{
            expires:new Date(Date.now()+8*3600000)
          });

      res.send("Login SuccessFul!!")
    }else{
          throw new Error("invalid credential ");     
    }
  } catch (error) {
    res.status(404).send("user not found"+error.message);
  }
})


module.exports=authRouter;