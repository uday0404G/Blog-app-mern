import React, { useEffect, useState } from 'react'
import LeftProfile from '../component/LeftProfile'
import Navbar from '../component/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, myblogs } from '../Redux/BlogReducer/action';
import { Link, useNavigate } from 'react-router';


const MyBlog = () => {
    
    let token=localStorage.getItem("isLoagin")
const dispatch=useDispatch()
const store=useSelector(rootreducer=>rootreducer.blog)
const nav=useNavigate()

useEffect(()=>{
    if(token.length>0){

       dispatch(myblogs(token))
    }
    else{

        alert("login first")
    }
},[token])


const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {   
      dispatch(deleteBlog(token, id,nav));   
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`); 
  };

  let myblog=store.myblog


  

  return (
    <>   
    <div className="wrapper">
   <LeftProfile/>
    <div className="content">
    
        <div className="container p-0">
           <Navbar/>
        </div>
  
        <div className="container py-5 px-2 bg-primary">
            <div className="row py-5 px-4">
                <div className="col-sm-6 text-center text-md-left">
                    <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">My Blog</h1>
                </div>
                <div className="col-sm-6 text-center text-md-right">
                    <div className="d-inline-flex pt-2">
                        <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                        <h4 className="m-0 text-white px-2">/</h4>
                        <h4 className="m-0 text-white">My Blog</h4>
                    </div>
                </div>
            </div>
        </div>
      
                <div className="container bg-white pt-5">
                {myblog.map((el)=>{
                    return (
                        <div key={el._id} className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                        <img className="img-fluid mb-4 mb-md-0" src={el.img} alt="Image" />
                        </div>
                        <div className="col-md-7">
                        <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">{el.title}</h3>
                        <div className="d-flex mb-3">
                            <small className="mr-2 text-muted">
                            <i className="fa fa-calendar-alt"></i> {new Date(el.createdTime).toLocaleDateString()}
                            </small>
                        </div>
                        <p>{el.description}</p>
                        <div className="d-flex">
                            <Link to={`/blog/${el._id}`} className="btn btn-link p-0 mr-3">
                            Read More <i className="fa fa-angle-right"></i>
                            </Link>
                            <button
                            className="btn btn-primary btn-sm mr-2"
                            onClick={() => handleEdit(el._id)}
                            >
                            Edit
                            </button>
                            <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(el._id)}
                            >
                            Delete
                            </button>
                        </div>
                        </div>
                    </div>
                    
                    )
                })}
            
                    <div className="row px-3 pb-5">
                        <nav aria-label="Page navigation">
                        <ul className="pagination m-0 mx-3">
                            <li className="page-item disabled">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            
            
            <div className="container py-4 bg-secondary text-center">
                <p className="m-0 text-white">
                    &copy; <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
        </div>
    </div></>
  )
}

export default MyBlog