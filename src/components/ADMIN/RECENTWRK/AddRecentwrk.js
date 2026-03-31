import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./Addwrk.css";

function AddRecentWork() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {

    if (e.target.name === "image") {

      const file = e.target.files[0];

      setFormData({
        ...formData,
        image: file
      });

      setPreview(URL.createObjectURL(file));

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {

      await axios.post("https://topshine-backend.onrender.com/api/recentworks/add", data);

      alert("Recent Work Added Successfully");

      navigate("/admin/recentworks/table");

    } catch (error) {

      console.log(error);
      alert("Error adding work");

    }

  };

  return (

    <div className="admin-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        <div className="form-card">

          <h2 className="form-title">Add Recent Work</h2>

          <form
            onSubmit={handleSubmit}
            className="recentwork-form"
          >

            <label>Work Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter work name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Description</label>

            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label>Choose Image</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="preview-img"
              />
            )}

            <button className="submit-btn">
              Add Work
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AddRecentWork;