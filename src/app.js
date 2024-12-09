const express=require('express');

const connectDB=require("./config/database");
const app=express();

const User=require("./models/user");
const port=7777;


app.use(express.json());

app.post("/signup",async(req,res)=>{

  console.log(req.body);
    // Creating a new instance of the user Model
    const user=new User(req.body);
    await user.save();
    res.send("User data saved successfully!!")

 })


 
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

