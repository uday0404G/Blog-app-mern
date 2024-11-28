import {  ERROR, LOADING, LOGINDATA, REGDATA } from "./actiontype"
import axios from "axios"

export const signupdata=(obj)=>(dispatch)=>{
    dispatch({type:LOADING})
    axios.post('http://localhost:8080/user/reg',obj)
    .then((result) => {
        dispatch({type:REGDATA,payload:result.data})
    }).catch((err) => {
        console.log(err);
        dispatch({type:ERROR,payload:err})
    });    
}

export const LoginData=(obj,nav)=>(dispatch)=>{
    dispatch({type:LOADING})
    axios.post('http://localhost:8080/user/login',obj)
    .then((result) => {
        if(result.data.msg){
            alert("user login success")
            localStorage.setItem("isLoagin",result.data.token)
            nav("/")
        }else{
            alert("user login failed")
        }
    }).catch((err) => {
        console.log(err);
        dispatch({type:ERROR,payload:err})
    });    
}