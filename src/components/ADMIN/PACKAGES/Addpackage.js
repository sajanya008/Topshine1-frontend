import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./AddPackage.css";

function AddPackage() {

const navigate = useNavigate();

const [formData,setFormData] = useState({
title:"",
duration:"",
price:"",
description:"",
icon:""
});


/* INPUT CHANGE */

const handleChange = (e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};


/* SUBMIT */

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await axios.post("https://topshine-backend.onrender.com/api/package/add",formData);

alert("Package Added Successfully");

navigate("/admin/packages/table");

setFormData({
title:"",
duration:"",
price:"",
description:"",
icon:""
});

}catch(error){

console.log(error);
alert("Error adding package");

}

};


return(

<div className="admin-container">

{/* SIDEBAR COMPONENT */}

<Sidebar/>

{/* MAIN CONTENT */}

<div className="admin-content">

<div className="form-card">

<h3 style={{ fontFamily: "'Nunito', sans-serif" }}>Add New Package</h3>

<form onSubmit={handleSubmit}>

<label>Package Title</label>
<input
type="text"
name="title"
placeholder="Package Title"
value={formData.title}
onChange={handleChange}
required
/>

<label>Duration</label>
<input
type="text"
name="duration"
placeholder="Ex: 3 Days / Week"
value={formData.duration}
onChange={handleChange}
required
/>

<label>Price (AED)</label>
<input
type="number"
name="price"
placeholder="Price"
value={formData.price}
onChange={handleChange}
required
/>

<label>Description</label>
<textarea
name="description"
placeholder="Package Description"
value={formData.description}
onChange={handleChange}
rows="4"
required
/>

<label>Icon</label>

<select
name="icon"
value={formData.icon}
onChange={handleChange}
required
>

<option value="">Select Icon</option>
<option value="calendar">Calendar</option>
<option value="cleaning">Cleaning</option>
<option value="daily">Daily Service</option>

</select>

<button type="submit" className="submit-btn">
Add Package
</button>

</form>

</div>

</div>

</div>

)

}

export default AddPackage;