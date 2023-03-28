const posts=require("../models/post.js");
const secreteKey="itisMykey";
const jwt=require('jsonwebtoken')
const mongoose=require("mongoose")
const postControler= (req,res)=>{
    const payload=jwt.verify(req.headers.token,secreteKey);
    if(!payload){
        res.status(404).send("you are not autharized")
        return;
    }
   
    const post=new posts({
    titel:req.body.titel,
    body:req.body.body,
    image:req.body.image,
    user:payload.username
})
post.save().then(data=>{res.status(200).send(data)}).catch(err=>res.status(500).send(err));

}
module.exports=postControler;