const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    titel:String,
    body:String,
    image:String

});

module.exports=mongoose.model('post',postSchema);