const validator=require('validator');

const validateSignUpData=(req)=>{
  const {firstName,lastName,email,password}= req.body;
  if(!firstName||!lastName){
    throw new Error("Name is required"); 
  }
  // else if(firstName.length<4 && firstName.length>50){
  //   throw new Error("firstName shold be 4-50 character");    
  // }

  else if(!validator.isEmail(email)){
    throw new Error("insert valid email"); 
  }
  else if(!validator.isStrongPassword(password)){
    throw new Error("your password is not strong");
    
  }
};
const validateEditProfileData=(req)=>{
  const allowedEditFields=["firstName","lastName","emailId","photoURL","gender","age","about","skiills"];

  const isEditAllowed=Object.keys(req.body).every((field)=>
  allowedEditFields.includes(field));
   
  return isEditAllowed;
}
module.exports={
  validateSignUpData, validateEditProfileData
}