const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const userModel = require("../models/usermodel");

const reg=async(req,res)=>{
    let {name,email,password} =req.body
    let data= await userModel.findOne({email})
    if(data)return res.status(400).send({err :"user Alrady Registerd"})
        bcrypt.hash(password,10,async(err,hash)=>{
            if(err) return res.status(404).send({err:"Error in Password hasing"})
                 await  userModel.create({...req.body,password:hash})
    
        res.send({msg:"User Created Successfully"})
        })  
}

const login=async(req,res)=>{
    let {email,password} =req.body
    let data= await userModel.findOne({email})
    if(!data)return res.status(400).send({err :"user Not Registerd"})
        bcrypt.compare(password,data.password,async(err,result)=>{
           
               if(result){
                   const token=jwt.sign({email:data.email ,data:data._id},"shh")
                   res.cookie("token",token)
                   res.send({msg:"Login Successfull",token})
               }else{
                res.status("401").send("Wrong credencial")
               }
        })  
}
module.exports ={reg,login}