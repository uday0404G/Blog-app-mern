const { default: mongoose } = require("mongoose");



const blogSchima=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    img:{type:String,required:true},
    createdTime : {type : Date , default : Date.now},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

const BlogModel=mongoose.model('blog',blogSchima)
module.exports=BlogModel;