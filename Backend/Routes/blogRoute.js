const express=require("express");
const auth = require("../middleware/auth");
const BlogModel = require("../models/blodmodel");

const BlogRoute=express.Router()


BlogRoute.get("/",async(req,res)=>{
    let Blogs = await BlogModel.find()
   res.send({blogs : Blogs})
})
BlogRoute.get("/single/:id",async(req,res)=>{
    let id=req.params.id
    let singleBlog = await BlogModel.findById({_id:id})
   res.status(200).send({msg:"single peoduct fech success",singleBlog})
})
BlogRoute.post("/add",auth,async(req,res)=>{
    let {title,img,description,userid} = req.body
  
    let obj = {
        title ,
        img ,
        description,
        userid : userid
    }
    let addblog = await BlogModel.create(obj)
    res.status(200).send({msg : "Blog added Succesfully", addblog})
})


BlogRoute.get("/myblogs",auth,async(req,res)=>{
    let myblogs = await BlogModel.find({userid : req.body.userid}).populate('userid','username email')
   res.send({myblogs})
})

BlogRoute.delete("/delete/:id",auth,async(req,res)=>{
    const { id } = req.params; 
    const { userid } = req.body;
    let user = await BlogModel.findById({_id:id})
    if(user.userid==userid){
        let deleteblog = await BlogModel.findByIdAndDelete(id)
        res.status(200).send({msg:"blog deleted successfully"})
    }else{
        res.status(401).send({err:"you are not eligible to delete this blog"})
    }
    
   
   
})


module.exports=BlogRoute