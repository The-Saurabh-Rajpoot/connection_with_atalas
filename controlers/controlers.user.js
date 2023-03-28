const user=require("../models/user.js");
const userControler=(req,res)=>{
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
module.exports=userControler;
