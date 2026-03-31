import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Sidebar from "../SIDEBAR/Sidebar";

import "./Servicetable.css";

function ServiceTable() {

const [services,setServices] = useState([]);
const [search,setSearch] = useState("");
const [currentPage,setCurrentPage] = useState(1);

const rowsPerPage = 4;

const fetchServices = async()=>{

try{

const res = await axios.get("https://topshine-backend.onrender.com/api/services");

setServices(res.data);

}catch(err){

console.log(err);

}

};

useEffect(()=>{

fetchServices();

},[]);


/* DELETE */

const handleDelete = async(id)=>{

if(window.confirm("Are you sure you want to delete?")){

try{

await axios.delete(`https://topshine-backend.onrender.com/api/services/${id}`);

fetchServices();

}catch(err){

console.log(err);

}

}

};


/* SEARCH */

const filteredServices = services.filter(service =>
service.title.toLowerCase().includes(search.toLowerCase())
);


/* PAGINATION */

const indexOfLast = currentPage * rowsPerPage;
const indexOfFirst = indexOfLast - rowsPerPage;

const currentServices = filteredServices.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(filteredServices.length / rowsPerPage);

const nextPage = ()=>{

if(currentPage < totalPages){

setCurrentPage(currentPage + 1);

}

};

const prevPage = ()=>{

if(currentPage > 1){

setCurrentPage(currentPage - 1);

}

};


return(

<div className="admin-container">

<Sidebar/>

<div className="admin-content">

{/* TOPBAR */}

<div className="topbar">

<h3>Services List</h3>

<NavLink to="/admin/services/add">
<button className="add-btn">
+ Add Service
</button>
</NavLink>

</div>


{/* SEARCH */}

<div className="search-box">

<input
type="text"
placeholder="Search service..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* TABLE CARD */}

<div className="table-container">

<table>

<thead>

<tr>
<th>No</th>
<th>Image</th>
<th>Title</th>
<th>Description</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{currentServices.length > 0 ? (

currentServices.map((service,index)=>(
<tr key={service._id}>

<td>{indexOfFirst + index + 1}</td>

<td>

<img
src={`https://topshine-backend.onrender.com/uploads/${service.image}`}
alt={service.title}
className="service-img"
/>

</td>

<td>{service.title}</td>

<td>{service.description}</td>

<td>

<NavLink to={`/admin/services/edit/${service._id}`}>
<button className="edit-btn">
Edit
</button>
</NavLink>

<button
className="delete-btn"
onClick={()=>handleDelete(service._id)}
>
Delete
</button>

</td>

</tr>
))

) : (

<tr>

<td colSpan="5" className="no-data">
No Services Found
</td>

</tr>

)}

</tbody>

</table>

</div>


{/* PAGINATION - CARD PURATH */}

<div className="pagination">

<button
onClick={prevPage}
disabled={currentPage === 1}
>
Prev
</button>

<span>

Page {currentPage} of {totalPages || 1}

</span>

<button
onClick={nextPage}
disabled={currentPage === totalPages}
>
Next
</button>

</div>

</div>

</div>

)

}

export default ServiceTable;