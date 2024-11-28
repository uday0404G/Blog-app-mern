const express=require("express");
const app=express()
require("dotenv").config()
const port=process.env.PORT || 3000
const cors=require('cors');
const UserRoute = require("./Routes/userRoute");
const dbconection = require("./server/config");
const cookie=require("cookie-parser");
const BlogRoute = require("./Routes/blogRoute");



app.use(express.json())
app.use(cors())
app.use(cookie())

app.use("/user",UserRoute)
app.use("/blog",BlogRoute)



app.listen(port,()=>{
    dbconection()
    console.log(`server is running on port ${port}`)
})