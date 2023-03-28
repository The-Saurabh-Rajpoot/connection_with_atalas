const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema= new mongoose.Schema(
{
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}
);
userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified('password')){
        return next();
    }
    const salt= await bcrypt.genSalt(10);
    const hasedPassword= await bcrypt.hash(user.password,salt);
    user.password=hasedPassword;
    next();
})
module.exports=mongoose.model("user",userSchema);