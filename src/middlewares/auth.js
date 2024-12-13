const jwt=require("jsonwebtoken");
const User=require("../models/user")

const userAuth= async(req,res,next)=>{
// Read the token from the req cookies 

try {
  const{token}= req.cookis;
  if(!token ){
    throw new Error("token is not valid");
    
  }
  const decodeObj=await jwt.verify(token,"DEV@TINDER@@@@@");
  const {_id}=decodeObj;
 
  const user=await User.findById(_id);
  if(!user){
   throw new Error("user not found!!"); 
  }
  req.user=user;
  next();
} catch (error) {
  res.status(404).send("ERROR : "+error.message);
}
 


// validate the token
//find the user
};

module.exports={

  userAuth,
}