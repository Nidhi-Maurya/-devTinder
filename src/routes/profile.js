const express=require("express");

const {userAuth}=require("../middlewares/auth");
const {validateEditProfileData}=require("../utils/validation") ;
profileRouter=express.Router();
profileRouter.get("/profile",userAuth,async(req,res)=>{
  try {
   const user =req.user;
   res.send(user);
  } catch (error) {
   res.status(400).send("error : "+error.message);
  }
 });

 profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
  try {
    if(!validateEditProfileData(req)){
      throw new Error("Invalid edit request");

      //return res.status(400).send("")

      const loggedInUser=req.user;
      // loggedInUser.firstName=req.body.firstName;
      Object.keys(req.body).forEach((key)=>(loggedInUser[key]=req.body[key]));
    
     await loggedInUser.save();
      res.json({ message:`${loggedInUser.firstName}, your profile Updated successfulyy`,data:loggedInUser});
      
    }
    
  } catch (error) {
    res.status(400).send("ERROR:"+ err.message );
  }
 })
 




module.exports=profileRouter;