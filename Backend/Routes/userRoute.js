const express=require("express");
const { reg, login } = require("../conntrollers/userControllers");
const UserRoute=express.Router();





UserRoute.post("/reg",reg)


UserRoute.post("/login",login)



module.exports=UserRoute