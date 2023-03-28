const mongoUrl="mongodb://localhost:27017/newSigninSignupdatabase";
const mongoose=require("mongoose");
const mongoconnetion=mongoose.connect(mongoUrl,{ useNewUrlParser: true }).then(console.log("connectd to database")).catch((err)=>{console.log(err)})
module.exports=mongoconnetion;