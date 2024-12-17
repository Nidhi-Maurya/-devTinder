const express = require("express");
const connectDB = require("./config/database");
const app = express();

//const bcrypt=require('bcrypt');

const port = 7777;
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");



app.use(express.json());
app.use(cookieParser());

const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/request");

// get user by email

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.email;
//   try {
//     const users = await User.find({ email: userEmail });

//     if (users.lenght === 0) {
//       res.status(404).send("user not found");
//     } else {
//       res.send(users);
//     }
//   } catch (error) {
//     res.status(400).send("ERROR :"+error.message);
//   }
// });

// app.get ("/user",async (req,res)=>{
//   const userId=req.body.userId;
//   try {
//     const users=await User.findById(userId);
//     res.send("user find");
//   } catch (error) {

//      res.status(400).send("Something went wrong!!");
//   }
// })

// login



//profile



 



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
