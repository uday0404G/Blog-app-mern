const { default: mongoose } = require("mongoose");



const userSchima=mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const userModel=mongoose.model('user',userSchima)
module.exports=userModel;