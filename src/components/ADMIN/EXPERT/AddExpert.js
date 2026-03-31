import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Sidebar from "../SIDEBAR/Sidebar";

import "./Addexpert.css";

function AddExpert(){

const navigate = useNavigate();

const [formData,setFormData] = useState({
name:"",
designation:"",
country:"",
image:null
});

const [preview,setPreview] = useState(null);


/* INPUT CHANGE */

const handleChange = (e)=>{

if(e.target.name === "image"){

const file = e.target.files[0];

setFormData({...formData,image:file});

setPreview(URL.createObjectURL(file));

}else{

setFormData({...formData,[e.target.name]:e.target.value});

}

};


/* SUBMIT */

const handleSubmit = async(e)=>{

e.preventDefault();

const data = new FormData();

data.append("name",formData.name);
data.append("designation",formData.designation);
data.append("country",formData.country);
data.append("image",formData.image);

try{

await axios.post("https://topshine-backend.onrender.com/api/expert/add",data);

alert("Expert Added Successfully");

navigate("/admin/experts/table");

}catch(err){

console.log(err);
alert("Error adding expert");

}

};


return(

<div className="admin-container">

{/* SIDEBAR */}

<Sidebar/>


{/* CONTENT */}

<div className="admin-content">

<div className="add-expert-wrapper">

<div className="form-card">

<h2 className="form-title" style={{ fontFamily: "'Nunito', sans-serif" }}>Add Expert</h2>

<form onSubmit={handleSubmit} className="expert-form">

<input
type="text"
name="name"
placeholder="Expert Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="text"
name="designation"
placeholder="Designation"
value={formData.designation}
onChange={handleChange}
required
/>

<input
type="text"
name="country"
placeholder="Country"
value={formData.country}
onChange={handleChange}
required
/>

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
className="image-preview"
/>

)}

<button type="submit" className="submit-btn">
Add Expert
</button>

</form>

</div>

</div>

</div>

</div>

)

}

export default AddExpert;