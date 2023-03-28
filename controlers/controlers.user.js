const user=require("../models/user.js");
const bcrypt=require("bcrypt")
const secreteKey="itisMykey"
const jwt=require("jsonwebtoken")
const userRegister=(req,res)=>{
    const newUser= new user({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
});
newUser.save().then(data=>{
    
        res.status(200).send(data);
})
.catch(err=>{
    res.status(500).send("some error occourd")

})}
const userLogin=async (req,res)=>{
    const password=req.body.password;
    const username=req.body.username;
   const userData= await user.findOne({username:username});
   console.log(userData);
   if(!userData){
    res.status(404).send("user not found");
    return
   }
   const passwordMatched= await bcrypt.compare(password,userData.password);
   if(!passwordMatched){
    res.status(500).send("password not matched");
    return
   }
   const token= await jwt.sign(req.body,secreteKey);
   res.status(200).json({messege:"succfully login",token:`${token}`})
   
}
module.exports={userRegister,userLogin};
