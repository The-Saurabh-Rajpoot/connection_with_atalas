const express=require("express");
const app=express();
const port=3002;
const authentication=require("./controlers/auth.js")
const {findAllPost}=require("./controlers/controlers.post")
const {userLogin,userRegister}=require("./controlers/controlers.user")
app.use(express.json());
const mongoConnection=require("./config/db.js")
mongoConnection();
const router=require("./routers/router.js")
// app.use("/",router);
app.get("/posts",findAllPost);
app.post("/register",userRegister);
app.use("/posts",authentication,router);
app.use("/login",userLogin,(()=>{}))
app.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
})
