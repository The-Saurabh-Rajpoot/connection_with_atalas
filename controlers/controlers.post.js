const posts=require("../models/post.js");
const mongoose=require("mongoose")
const postControler= (req,res)=>{
    const post=new posts({
    titel:req.body.titel,
    body:req.body.body,
    image:req.body.image
})
post.save().then(data=>{res.status(200).send(data)}).catch(err=>res.status(500).send(err));

}
module.exports=postControler;