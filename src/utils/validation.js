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

module.exports={
  validateSignUpData,
}