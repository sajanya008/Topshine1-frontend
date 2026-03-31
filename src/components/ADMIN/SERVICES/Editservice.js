import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./EditService.css";

function EditService(){

const { id } = useParams();
const navigate = useNavigate();

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [image,setImage] = useState(null);
const [oldImage,setOldImage] = useState("");
const [fileName,setFileName] = useState("");


/* FETCH SERVICE */

useEffect(()=>{

axios.get(`https://topshine-backend.onrender.com/api/services/${id}`)
.then(res=>{
setTitle(res.data.title);
setDescription(res.data.description);
setOldImage(res.data.image);
})
.catch(err=>console.log(err));

},[id]);


/* IMAGE CHANGE */

const handleImageChange = (e)=>{

const file = e.target.files[0];

if(file){
setImage(file);
setFileName(file.name);
}

};


/* UPDATE SERVICE */

const handleUpdate = async(e)=>{

e.preventDefault();

const formData = new FormData();

formData.append("title",title);
formData.append("description",description);

if(image){
formData.append("image",image);
}

try{

await axios.put(
`https://topshine-backend.onrender.com/api/services/${id}`,
formData,
{
headers:{
"Content-Type":"multipart/form-data"
}
}
);

alert("Service Updated Successfully");

navigate("/admin/services");

}catch(err){
console.log(err);
}

};


return(

<div className="edit-service-container">

<Sidebar/>

<div className="edit-service-content">

<div className="edit-service-card">

<h3>Edit Service</h3>

<form onSubmit={handleUpdate}>

<label>Service Title</label>

<input
type="text"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<label>Description</label>

<textarea
rows="4"
value={description}
onChange={(e)=>setDescription(e.target.value)}
required
/>

{/* CURRENT IMAGE */}

{oldImage && (

<div className="current-image">

<label>Current Photo</label>

<img
src={`https://topshine-backend.onrender.com/uploads/${oldImage}`}
alt="current"
/>

</div>

)}

<label>Choose New Photo</label>

<input
type="file"
accept="image/*"
onChange={handleImageChange}
/>

{fileName && (
<p className="file-name">
Selected File: {fileName}
</p>
)}

<button
type="submit"
className="update-btn"
>
Update Service
</button>

</form>

</div>

</div>

</div>

);

}

export default EditService;