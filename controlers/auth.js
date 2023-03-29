const jwt=require("jsonwebtoken")
const secreteKey="itisMykey";
const authentication=(req,res,next)=>{
    try {
        jwt.verify(req.headers.token,secreteKey);
        next()
    } catch (error) {
        res.status(400).send(error)
        return;
    }
    
}
module.exports=authentication;