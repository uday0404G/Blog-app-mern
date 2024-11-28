import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Login from '../component/Login'
import Signup from '../component/Signup'
import Home from '../component/Home'
import About from '../component/About'
import MyBlog from './../component/MyBlog';
import SingleBlog from '../component/SingleBlog'
import Contact from '../component/Contact'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={
          <PrivateRoute><Home/></PrivateRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myblog" element={<MyBlog/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default MainRouter