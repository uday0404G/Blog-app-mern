import { BLOGS, LOADING, ERROR, SINGLE, MYBLOGS } from "./actiontype";
import axios from "axios";

export const Blog = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    axios
      .get("http://localhost:8080/blog/")
      .then((result) => {
        console.log(result.data.blogs);
        dispatch({ type: BLOGS, payload: result.data.blogs });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const Singleblog=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
  
    
    axios.get(`http://localhost:8080/blog/single/${id}`)
    .then((result) => {
        if(result.data.msg){
           
           dispatch({type:SINGLE,payload:result.data.singleBlog})
        }else{
            alert("SINGALE PRODUCT NOT FECHED")
        }
    }).catch((err) => {
        console.log(err);
        dispatch({type:ERROR,payload:err})
    });    
}
export const myblogs=(token)=>(dispatch)=>{
  dispatch({type:LOADING})
  axios.get(`http://localhost:8080/blog/myblogs`,{
    headers: { Authorization: `Bearer ${token}` }
  })
  .then((result) => {
      if(result.data){     
         dispatch({type:MYBLOGS,payload:result.data.myblogs})
      }else{
          alert("SINGALE PRODUCT NOT FECHED")
      }
  }).catch((err) => {
      console.log(err);
      dispatch({type:ERROR,payload:err})
  });    
}

export const AddBlogs=(token,obj,nav)=>(dispatch)=>{
  dispatch({type:LOADING})
  axios.post(`http://localhost:8080/blog/add`,obj,{
    headers: { authorization: `Bearer ${token}` }
  })
  .then((result) => {
      if(result.data.msg){     
         alert(result.data.msg)
         nav("/myblog")
      }else{
          alert("SINGALE PRODUCT NOT FECHED")
      }
  }).catch((err) => {
      console.log(err);
      dispatch({type:ERROR,payload:err})
  });    
}
export const deleteBlog=(token,id,nav)=>(dispatch)=>{
  dispatch({type:LOADING})
  console.log(token);
  
  axios.delete(`http://localhost:8080/blog/delete/${id}`,{
    headers: { authorization: `Bearer ${token}` }
  })
  .then((result) => {
      if(result.data.msg){     
         alert(result.data.msg)
         nav("/myblog")
      }else{
          alert("data not deleted")
      }
  }).catch((err) => {
      console.log(err);
      dispatch({type:ERROR,payload:err})
  });    
}