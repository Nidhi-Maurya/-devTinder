const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const port = 7777;
app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of the user Model
  const user = new User(req.body);
  await user.save();
  res.send("User data saved successfully!!");
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
    res.status(400).send("Something went wrong!!");
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




// feed API -get /feed -all the users from the database
 
// DELETE API

app.get("/feed",async (req, res) => {
  try {
    const users=  await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong!!");
  }
});

//  DELETE API

app.delete("/user",async(req,res)=>{
  const userId=req.body.userId;
  try {
    const user=await User.findByIdAndDelete(userId);

     res.send("user deleted successfully!!")
  } catch (error) {
    res.status(400).send("Something went wrong!!");
  }
})

// update data of the user

app.patch("/user",async(req,res)=>{
  const userId= req.body.userId;
  const data=req.body;

  
  try {
    const ALLOWED_UPDATES=[
      "usedId","photoUrl","about","gender","age","skills"
    ];
    const isUpdateAllowed=Object.keys(data).every((k)=>
     ALLOWED_UPDATES.includes(k)
    );
    if(!isUpdateAllowed){
      throw new Error("Update not allowed");
    }
    if(data?.skills.length>10){
      throw new Error("Skils cannot be more than 10");
    }
    const user=await User.findByIdAndUpdate({_id:userId },data,{
      returnDocument:"after",
      runValidators:true,
      
    });
  console.log(user);
    res.send("user updated successfully");
  } catch (error) {
     res.status(400).send("Update Failed!!"+error.message);
  }
})

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
