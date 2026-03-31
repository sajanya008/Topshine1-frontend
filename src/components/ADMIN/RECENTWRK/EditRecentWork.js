import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./Editwrk.css";

function Editwork() {

const { id } = useParams();
const navigate = useNavigate();

const [formData,setFormData] = useState({
name:"",
description:"",
image:null
});

const [oldImage,setOldImage] = useState("");
const [preview,setPreview] = useState("");


/* FETCH SINGLE WORK */

useEffect(()=>{

const fetchSingleWork = async()=>{

try{

const res = await axios.get(`https://topshine-backend.onrender.com/api/recentworks/${id}`);

setFormData({
name:res.data.name,
description:res.data.description,
image:null
});

setOldImage(res.data.image);

}catch(error){
console.log(error);
}

};

fetchSingleWork();

},[id]);


/* HANDLE CHANGE */

const handleChange = (e)=>{

if(e.target.name === "image"){

const file = e.target.files[0];

setFormData({...formData,image:file});

setPreview(URL.createObjectURL(file));

}else{

setFormData({
...formData,
[e.target.name]:e.target.value
});

}

};


/* SUBMIT */

const handleSubmit = async(e)=>{

e.preventDefault();

const data = new FormData();

data.append("name",formData.name);
data.append("description",formData.description);

if(formData.image){
data.append("image",formData.image);
}

try{

await axios.put(
`https://topshine-backend.onrender.com/api/recentworks/${id}`,
data
);

alert("Updated Successfully");

navigate("/admin/recentworks/table");

}catch(error){
console.log(error);
}

};


return(

<div className="admin-container">

<Sidebar/>

<div className="admin-content">

<div className="form-card">

<h3>Edit Recent Work</h3>

<form onSubmit={handleSubmit} className="recent-form">

<label>Name</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
/>

<label>Description</label>
<textarea
name="description"
value={formData.description}
onChange={handleChange}
required
></textarea>


<label>Current Image</label>

<img
src={`https://topshine-backend.onrender.com/uploads/recentworks/${oldImage}`}
alt="old"
className="current-img"
/>


<label>Change Image</label>
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
className="preview-img"
/>

)}

<button type="submit" className="submit-btn">
Update Work
</button>

</form>

</div>

</div>

</div>

);

}

export default Editwork;