import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./AddPackage.css";

function EditPackage() {

const { id } = useParams();
const navigate = useNavigate();

const [formData,setFormData] = useState({
title:"",
duration:"",
price:"",
description:"",
icon:""
});


/* FETCH PACKAGE */

useEffect(()=>{

const fetchPackage = async()=>{

try{

const res = await axios.get(`https://topshine-backend.onrender.com/api/package/${id}`);

setFormData({
title:res.data.data.title || "",
duration:res.data.data.duration || "",
price:res.data.data.price || "",
description:res.data.data.description || "",
icon:res.data.data.icon || ""
});

}catch(error){

console.log(error);

}

};

fetchPackage();

},[id]);



/* INPUT CHANGE */

const handleChange = (e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};



/* UPDATE */

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await axios.put(`https://topshine-backend.onrender.com/api/package/update/${id}`,formData);

alert("Package Updated Successfully");

navigate("/admin/packages/table");

}catch(error){

console.log(error);
alert("Update Failed");

}

};


return(

<div className="admin-container">

{/* SIDEBAR */}

<Sidebar/>


{/* MAIN CONTENT */}

<div className="admin-content">

<div className="form-card">

<h3 style={{ fontFamily: "'Nunito', sans-serif" }}>Edit Service Package</h3>

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
Update Package
</button>

</form>

</div>

</div>

</div>

)

}

export default EditPackage;