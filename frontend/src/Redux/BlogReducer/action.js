import { BLOGS, LOADING, ERROR, SINGLE } from "./actiontype";
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
            alert("SINGALE PRODUCT  FECHED")
           dispatch({type:SINGLE,payload:result.data.singleBlog})
        }else{
            alert("SINGALE PRODUCT NOT FECHED")
        }
    }).catch((err) => {
        console.log(err);
        dispatch({type:ERROR,payload:err})
    });    
}