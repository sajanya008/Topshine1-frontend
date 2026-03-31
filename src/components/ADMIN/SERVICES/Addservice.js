import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../SIDEBAR/Sidebar";
import "./Addservice.css";

function AddService() {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [image,setImage] = useState(null);
const [preview,setPreview] = useState(null);
const [redirect,setRedirect] = useState(false);


/* IMAGE CHANGE */

const handleImageChange = (e)=>{

const file = e.target.files[0];
setImage(file);

if(file){
setPreview(URL.createObjectURL(file));
}

};


/* SUBMIT */

const handleSubmit = async(e)=>{

e.preventDefault();

if(!image){
alert("Please select an image");
return;
}

const formData = new FormData();

formData.append("title",title);
formData.append("description",description);
formData.append("image",image);

try{

await axios.post(
"https://topshine-backend.onrender.com/api/services/add",
formData,
{headers:{ "Content-Type":"multipart/form-data"}}
);

alert("Service Added Successfully");
setRedirect(true);

}catch(error){

console.log(error);
alert("Error adding service");

}

};


if(redirect){
return <Navigate to="/admin/services" />;
}


return(

<div className="admin-container">

{/* SIDEBAR COMPONENT */}

<Sidebar/>


{/* MAIN CONTENT */}

<div className="admin-content">

<div className="form-card">

<h3>Add New Service</h3>

<form onSubmit={handleSubmit} encType="multipart/form-data">

<label>Service Title</label>

<input
type="text"
placeholder="Service Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>


<label>Description</label>

<textarea
placeholder="Service Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
rows="4"
required
/>


<label>Upload Image</label>

<input
type="file"
accept="image/*"
onChange={handleImageChange}
required
/>


{preview && (

<img
src={preview}
alt="Preview"
className="preview-img"
/>

)}


<button
type="submit"
className="submit-btn">
Add Service
</button>

</form>

</div>

</div>

</div>

);

}

export default AddService;