const mongoose=require('mongoose');


const connectDB=async()=>{
  await mongoose.connect("mongodb+srv://devTinder:U2Q3NYckyknPH57C@cluster0.xv2sr.mongodb.net/");
}

module.exports=connectDB;



