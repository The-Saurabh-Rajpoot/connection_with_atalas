const express=require("express");
const app=express();
const port=3002;


app.use(express.json());
const mongoConnection=require("./config/db.js")
mongoConnection();
const router=require("./routers/router.js")
app.use("/",router);
app.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
})
