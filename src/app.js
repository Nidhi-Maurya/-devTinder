const express=require('express');
const app=express();
const port=7777;

 app.use("/hello",(req,res)=>{
res.send("hello");
});


app.use("/home",(req,res)=>{
  res.send("this is my home page");
});

app.listen(3000,()=>{
  console.log(`Server is running on port ${port}`);
  
})
