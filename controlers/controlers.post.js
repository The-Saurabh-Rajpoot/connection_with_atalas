const secreteKey="itisMykey";
const jwt=require('jsonwebtoken')
const mongoose=require("mongoose");
const post = require("../models/post.js");
const postControler= (req,res)=>{
    const payload=jwt.verify(req.headers.token,secreteKey);
    const Post=new post({
    titel:req.body.titel,
    body:req.body.body,
    image:req.body.image,
    user:payload.username
})
Post.save().then(data=>{res.status(200).send(data)}).catch(err=>res.status(500).send(err));

}
const updatePost= async (req,res)=>{
    const Postid=req.params.id;
    const payload= await jwt.verify(req.headers.token,secreteKey);
    const user=payload.username;
    const postbyid= await post.findById(Postid);
    
    if(postbyid.user!=user){
        res.status(401).send("can not edit other's post");
        return;
        }
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