const posts=require("../models/post.js");
const secreteKey="itisMykey";
const jwt=require('jsonwebtoken')
const mongoose=require("mongoose");
const post = require("../models/post.js");
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
const updatePost=(req,res)=>{
    const Postid=req.params.id;
    post.findByIdAndUpdate(Postid,req.body,{new:true}).then((data)=>{
        res.status(200).send(data);
    }).catch(err=>{res.status(404).send(err)})
}
const findAllPost=async (req,res)=>{
    await post.find({}).then((data)=>{
        res.status(200).json(data)
    }).catch(err=>{err});
}
const deleteByid=(req,res)=>{
    post.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        res.status(200).send('deleted successfylly')
    }).catch(err=>{err});
}
module.exports={postControler,updatePost,findAllPost,deleteByid};