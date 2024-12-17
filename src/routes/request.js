const express=require('express');

const requestRouter= express.Router();
const {userAuth}=require("../middlewares/auth");

requestRouter.post("/sendconnection",userAuth,async (req,res)=>{
  const user=req.user;
  console.log("sending connections request...")

  res.send(user.firstName +"sent the connection request....")
})



module.exports=requestRouter;
