import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const LeftProfile = () => {
  return (
    <>   <div className="sidebar">
    <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
      <img
        className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3"
        src="/img/profile.jpg"
        alt="Profile"
      />
      <h1 className="font-weight-bold">Kate Glover</h1>
      <p className="mb-4">
        Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem.
      </p>
      <div className="d-flex justify-content-center mb-5">
        <a className="btn btn-outline-primary mr-2" href="#">
          <FaTwitter />
        </a>
        <a className="btn btn-outline-primary mr-2" href="#">
          <FaFacebookF />
        </a>
        <a className="btn btn-outline-primary mr-2" href="#">
          <FaLinkedinIn />
        </a>
        <a className="btn btn-outline-primary mr-2" href="#">
          <FaInstagram />
        </a>
      </div>
      <a href="#" className="btn btn-lg btn-block btn-primary mt-auto">
        Hire Me
      </a>
    </div>
  </div></>
  )
}

export default LeftProfile