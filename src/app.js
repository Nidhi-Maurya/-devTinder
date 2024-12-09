const express=require('express');

const connectDB=require("./config/database");
const app=express();

const User=require("./models/user");
const port=7777;

app.post("/signup", async (req,res)=>{
// creating a new instance of the User Model
const user=new User({
  firstName:"Nidhi",
  lastName:"Maurya",
  email:"maurya@gmail.com",
  password:"maurya@123",
});

await user.save();
res.send("USER ADDED SUCCESSFULLY!!!");



});



 
connectDB().then(()=>{
  try {
    console.log("Database Connected successfully");

    app.listen(7777,()=>{
      console.log(`Server is running on port ${port}`);     
    })
    
  } catch (error) {
    console.log("errror");
    //U2Q3NYckyknPH57C
  }
})

