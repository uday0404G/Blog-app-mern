import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import About from '../pages/About'
import MyBlog from './../pages/MyBlog';
import SingleBlog from '../pages/SingleBlog'
import Contact from '../pages/Contact'
import AddBlog from '../pages/AddBlog'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={
          <PrivateRoute><Home/></PrivateRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myblog" element={<MyBlog/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/add" element={<PrivateRoute><AddBlog/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default MainRouter