import React, { useEffect } from 'react';
import LeftProfile from '../component/LeftProfile';
import Navbar from '../component/Navbar';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Singleblog } from '../Redux/BlogReducer/action';

const SingleBlog = () => {
  const id = useParams().id;
  console.log(id);
  const data=useSelector(rootReducer => rootReducer.blog);
  const dispacth=useDispatch();

 useEffect(()=>{
  dispacth(Singleblog(id))
 },[id])
console.log(data.SingleBlog);

 let singdata=data.SingleBlog

  return (
    <div>
      <div className="wrapper">
        <LeftProfile/>

        <div className="content">
          <div className="container p-0">
           <Navbar/>
          </div>

          <div className="container py-5 px-2 bg-primary">
            <div className="row py-5 px-4">
              <div className="col-sm-6 text-center text-md-left">
                <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Blog Detail</h1>
              </div>
              <div className="col-sm-6 text-center text-md-right">
                <div className="d-inline-flex pt-2">
                  <h4 className="m-0 text-white">
                    <a className="text-white" href="">
                      Home
                    </a>
                  </h4>
                  <h4 className="m-0 text-white px-2">/</h4>
                  <h4 className="m-0 text-white">Blog Detail</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5 px-2 bg-white">
            <div className="row px-4">
              <div className="col-12">
                <img className="img-fluid mb-4" src={singdata.img} alt="Detail" />
                <h2 className="mb-3 font-weight-bold">{singdata.title}</h2>
                <div className="d-flex">
                  <p className="mr-3 text-muted">
                    <i className="fa fa-calendar-alt"></i> {singdata.createdTime
                    }
                  </p>
                  {/* <p className="mr-3 text-muted">
                    <i className="fa fa-folder"></i> Web Design
                  </p>
                  <p className="mr-3 text-muted">
                    <i className="fa fa-comments"></i> 15 Comments
                  </p> */}
                </div>
                <p>
                  {singdata.description}
                </p>
               
              </div>

              {/* Add other sections here */}
            </div>
          </div>

          <div className="container py-4 bg-secondary text-center">
            <p className="m-0 text-white">
              &copy;{' '}
              <a className="text-white font-weight-bold" href="#">
                Your Site Name
              </a>
              . All Rights Reserved. Designed by{' '}
              <a className="text-white font-weight-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
