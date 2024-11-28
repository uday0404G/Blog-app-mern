const { default: mongoose } = require("mongoose")



const dbconection=async()=>{
    try {
           await mongoose.connect(process.env.DATABASE)
            .then(() => console.log("DB connected"))
            
    } catch (error) {
        console.log(error);
    }
}
module.exports=dbconection