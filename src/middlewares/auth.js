export const adminAuth=(req,res,next)=>{
  console.log("Admin auth is getting checked!");
  const token="xyz";
  const isAdminAuthorized=token==="xyz";
  if(!isAdminAuthorized){
    res.status(401).send("Unauthprized request");
  }else{
    next();
  }
  
};

module.exports={
  adminAuth,
}