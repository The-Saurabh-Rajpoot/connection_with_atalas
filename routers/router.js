const express=require("express");
const {postControler,updatePost,deleteByid}=require("../controlers/controlers.post");
const router=express.Router();
router.post("",postControler);
router.put("/:id",updatePost);
router.delete("/:id",deleteByid);
module.exports=router;
