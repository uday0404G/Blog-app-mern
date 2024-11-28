import {  ERROR, LOADING, LOGINDATA, REGDATA } from "./actiontype"

const init={
    regdata:[],
    logindata:[],
    loading:false,
    error:""
}

const UserReducer=(state=init,{type,payload})=>{
    switch(type){
        case REGDATA:return{
            ...state,
            regdata:payload,
            loading:false
        }
        case LOGINDATA:return{
            ...state,
            logindata:payload,
            loading:false
        }
        case LOADING:return{
            ...state,
            loading:true
        }
        case ERROR:return{
            ...state,
            error:payload
        }
        default:return{...state}

    }
}

export default UserReducer