import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../SIDEBAR/Sidebar";

import "./Editexpert.css";

function EditExpert() {

const { id } = useParams();
const navigate = useNavigate();

const [formData,setFormData] = useState({
name:"",
designation:"",
country:"",
image:null
});

const [preview,setPreview] = useState(null);


/* FETCH EXPERT */

useEffect(()=>{

const fetchExpert = async()=>{

try{

const res = await axios.get(`https://topshine-backend.onrender.com/api/expert/${id}`);

setFormData({
name:res.data.name,
designation:res.data.designation,
country:res.data.country,
image:null
});

setPreview(`https://topshine-backend.onrender.com/uploads/experts/${res.data.image}`);

}catch(err){

console.log(err);

}

};

fetchExpert();

},[id]);


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

if(formData.image){
data.append("image",formData.image);
}

try{

await axios.put(`https://topshine-backend.onrender.com/api/expert/${id}`,data);

alert("Expert Updated Successfully");

navigate("/admin/experts/table");

}catch(err){

console.log(err);
alert("Update Failed");

}

};


return(

<div className="admin-container">

{/* SIDEBAR */}

<Sidebar/>


{/* CONTENT */}

<div className="admin-content">

<div className="edit-expert-wrapper">

<div className="form-card">

<h2 className="form-title" style={{ fontFamily: "'Nunito', sans-serif" }}>Edit Expert</h2>

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
/>

{preview && (

<img
src={preview}
alt="preview"
className="image-preview"
/>

)}

<button type="submit" className="submit-btn">
Update Expert
</button>

</form>

</div>

</div>

</div>

</div>

)

}

export default EditExpert;