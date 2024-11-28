import { BLOGS, ERROR, LOADING, MYBLOGS, SINGLE, USERDATA } from "./actiontype"


const init={
    blogs:[],
    userdata:[],
    loading:false,
    error:"",
    myblog:[],
    SingleBlog:[]
}

const BlogReducer=(state=init,{type,payload})=>{
    switch(type){
        case USERDATA:return{
            ...state,
            userdata:payload,
            loading:false
        }
        case BLOGS:return{
            ...state,
            blogs:payload,
            loading:false
        }
        case MYBLOGS:return{
            ...state,
            myblog:payload,
            loading:false
        }
        case SINGLE:return{
            ...state,
            SingleBlog:payload,
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

export default BlogReducer