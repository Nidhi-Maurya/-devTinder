
const { JsonWebTokenError } = require('jsonwebtoken');
const mongoose=require('mongoose');
const validator=require("validator");
const bcrypt=require("brycpt");
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
    unique:true,
    trim: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid email address" +value);
      }
    }

    // unique is used to not used same email id
  },
  password:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    // validate(value){
    //   if(!validator.isStrongPassword(value)){
    //     throw new Error(" password is to weak" + value);
    //   }
    // }
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

userSchema.methods.getJWT= async function(){
  const user=this;
const token =await  JsonWebTokenError.sign({_id:userSchema._id},"DEV@TINDER@@@@@",{
  expireIn:"6d"
})
return token;
}


userSchema.methods.validtePassword= async function(passwordInputByUser){
  const user=this;
  const passwordHash=user.password;

  const isPassword=await bcrypt.compare("password",passwordHash);
}

module.exports=mongoose.model("User",userSchema);