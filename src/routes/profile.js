const express=require("expresss");

const {userAuth}=require("../middlewares/auth");
const profileRouter=express.Router();
app.get("/profile",async(req,res)=>{
  try {
   const user =req.user;
   res.send(user);
  } catch (error) {
   res.status(400).send("error : "+error.message);
  }
 })
 




module.exports=profileRouter;