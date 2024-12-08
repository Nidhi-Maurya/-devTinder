const express=require('express');
const app=express();
const port=7777;

 

// App.get only handle GET call to /user

// app.get("/user/:userId/:name/:password",(req,res)=>{
//   console.log(req.params);
  
//   res.send({firstname:"NIDHI",lastname:"MAURYA"});
// })



app.use("/user",(req,res,next)=>{
  // route handler
  console.log("handling route user 1!!");
  // res.send("route handler 1");
  next();
},
(req,res)=>{
  //route handler 2
  console.log("handling route user 2!!");
  res.send("handler 2");
  
});
// app.use is match all the HTTP method API calls to /test

app.listen(7777,()=>{
  console.log(`Server is running on port ${port}`);
  
})
