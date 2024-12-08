const express=require('express');
const app=express();
const port=7777;

 

// App.get only handle GET call to /user

app.get("/user",(req,res)=>{
  res.send({firstname:"NIDHI",lastname:"MAURYA"});
})

app.post("/user",(req,res)=>{
  res.send("data save successfully save to database")
})

app.delete("/user",(req,res)=>{
  res.send("deleted successfully");
})

app.use("/home",(req,res)=>{
  res.send("this is my home page");
});
// app.use is match all the HTTP method API calls to /test

app.listen(7777,()=>{
  console.log(`Server is running on port ${port}`);
  
})
