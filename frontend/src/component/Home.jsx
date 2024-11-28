import React, { useEffect } from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router';
import LeftProfile from './LeftProfile';
import Navbar from './Navbar';



import { useDispatch, useSelector } from 'react-redux';
import { Blog } from '../Redux/BlogReducer/action';

const Home = () => {
  const dispatch=useDispatch()
  const store = useSelector(rootReducer => rootReducer.blog);
  

  
useEffect(()=>{
  dispatch(Blog())
},[])
console.log(store.blogs);
const blogs=store.blogs;

  return (
    <>
    <div className="wrapper">
   <LeftProfile/>

      <div className="content">
        {/* Navbar */}
     <Navbar/>
        

        {/* Blogs */}
         <div className="container bg-white pt-5">
          {blogs.map(blog => (
            <NavLink to={`/blog/${blog._id}`} key={blog._id} className="row blog-item px-5 pb-5">
              <div className="col-md-5">
                <img className="img-fluid mb-4 mb-md-0" src={blog.img} alt={blog.title} />
              </div>o
              <div className="col-md-7">
                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">{blog.title}</h3>
                <div className="d-flex mb-3">
                  <small className="mr-2 text-muted">
                    <i className="fa fa-calendar-alt"></i> {blog.date}
                  </small>
                   <small className="mr-2 text-muted">
                    <i className="fa fa-folder"></i> {blog.category}
                  </small> 
                   <small className="mr-2 text-muted">
                    <i className="fa fa-comments"></i> {blog.comments} Comments
                  </small> 
                 </div>
                <p>{blog.description}</p>
                <a className="btn btn-link p-0" href="#">
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </NavLink>
          ))}
        </div>  
      </div>
    </div>
      <Footer/>
    </>

  );
};

export default Home;
