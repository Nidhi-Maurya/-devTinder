const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const bcrypt=require('bcrypt');
const {validateSignUpData}=require("./utils/validation")
const port = 7777;
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");
const {userAuth}=require("./middlewares/auth");


app.use(express.json());
app.use(cookieParser());



app.post("/signup", async (req, res) => {
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
// get user by email

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const users = await User.find({ email: userEmail });

    if (users.lenght === 0) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("ERROR :"+error.message);
  }
});

app.get ("/user",async (req,res)=>{
  const userId=req.body.userId;
  try {
    const users=await User.findById(userId);
    res.send("user find");
  } catch (error) {

     res.status(400).send("Something went wrong!!");
  }
})

// login

app.post("/login",async(req,res)=>{
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

//profile

app.get("/profile",async(req,res)=>{
 try {
  const user =req.user;
  res.send(user);
 } catch (error) {
  res.status(400).send("error : "+error.message);
 }
})

app.post("/sendconnection",userAuth,async (req,res)=>{
  const user=req.user;
  console.log("sending connections request...")

  res.send(user.firstName +"sent the connection request....")
})


 



// update data of the user



  
  


connectDB().then(() => {
  try {
    console.log("Database Connected successfully");
    app.listen(7777, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("errror");
    //U2Q3NYckyknPH57C
  }
});
