import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddBlogs } from "../Redux/BlogReducer/action";
import { useNavigate } from "react-router";


const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: ""
  });
  const dispatch=useDispatch()
  const store=useSelector(rootreducer=>rootreducer.blog)
let token=localStorage.getItem("isLoagin")
const nav=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(AddBlogs(token, formData,nav));
    // }else{
    //     alert("Please login first")
    // }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Blog Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter blog title"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Blog Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Enter blog description"
            ></textarea>
          </div>

          {/* Image */}
          <div className="form-group">
            <label htmlFor="img">Image URL</label>
            <input
              type="text"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
              placeholder="Enter image URL"
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" className="form-button">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
