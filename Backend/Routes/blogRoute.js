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
    // console.log(userId)
    let obj = {
        title ,
        img ,
        description,
        userid : userid
    }
    let data = await BlogModel.create(obj)
    res.status(200).send({msg : "Blog added Succesfully", blog : data})
})
// BlogRoute.get("/:id",auth,async(req,res)=>{
//     try {
//         let data = await BlogModel.findById(req.params.id)
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// })

BlogRoute.get("/getMine",auth,async(req,res)=>{
    let Blogs = await BlogModel.find({userid : req.body.userid}).populate('userid','username email')
   res.send({blogs : Blogs})
})



module.exports=BlogRoute