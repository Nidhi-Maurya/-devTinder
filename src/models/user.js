
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minLength:4,
    maxLength:50,
  },
  lastName:{
    type:String
  },
  email:{
    type:String,
    required:true,
    unique:true
    // unique is used to not used same email id
  },
  password:{
    type:String,
    required:true,
    lowercase:true,
    trim:true
  },
  age:{
    type:Number,
    min:18,
  },
  gender:{

    type:String,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender data is not valid");
      }

    },
  },
  photoURL:{
    type:String,
    default:" your pic  url"
  },
  about:{
    type:String,
    default:"This is a default description of the user"
  },
  skills:{
    type:[String],
  }


},
{
  timestamps:true,
});


module.exports=mongoose.model("User",userSchema);