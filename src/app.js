const express=require('express');
const app=express();
const port=7777;

 

// App.get only handle GET call to /user

app.get("/user/:userId/:name/:password",(req,res)=>{
  console.log(req.params);
  
  res.send({firstname:"NIDHI",lastname:"MAURYA"});
})



app.use("/home",(req,res)=>{
  res.send("this is my home page");
});
// app.use is match all the HTTP method API calls to /test

app.listen(7777,()=>{
  console.log(`Server is running on port ${port}`);
  
})
