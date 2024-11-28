import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>   <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
    <a className="navbar-brand d-block d-lg-none" href="#">Navigation</a>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
      <div className="navbar-nav m-auto">
        <NavLink to="/"className="nav-item nav-link active" >Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/myblog" className="nav-item nav-link" >MyBlogs</NavLink>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
      </div>
    </div>
  </nav>
</>
  )
}

export default Navbar