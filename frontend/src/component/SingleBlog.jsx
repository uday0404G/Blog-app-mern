import React, { useEffect } from 'react';
import LeftProfile from './LeftProfile';
import Navbar from './Navbar';
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

 singdata=(data.SingleBlog)

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
                <img className="img-fluid mb-4" src="img/detail.jpg" alt="Detail" />
                <h2 className="mb-3 font-weight-bold">{}</h2>
                <div className="d-flex">
                  <p className="mr-3 text-muted">
                    <i className="fa fa-calendar-alt"></i> 01-Jan-2045
                  </p>
                  <p className="mr-3 text-muted">
                    <i className="fa fa-folder"></i> Web Design
                  </p>
                  <p className="mr-3 text-muted">
                    <i className="fa fa-comments"></i> 15 Comments
                  </p>
                </div>
                <p>
                  Clita duo sadipscing amet ea ut kasd amet dolore, sed erat at dolore vero tempor et sit amet, amet
                  amet elitr et consetetur ea duo. Gubergren tempor rebum clita at sit diam. Ea sadipscing voluptua et
                  sit diam diam sed, gubergren magna ipsum lorem clita dolores nonumy dolor.
                </p>
                <h3 className="mb-3 font-weight-bold">Est dolor lorem et ea</h3>
                <img className="w-50 float-left mr-4 mb-3" src="img/blog-1.jpg" alt="Blog" />
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est
                  sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed.
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
