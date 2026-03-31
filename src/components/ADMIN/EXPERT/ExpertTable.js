import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Sidebar from "../SIDEBAR/Sidebar";
import "./Experttable.css";

function ExpertTable() {

const [experts,setExperts] = useState([]);
const [search,setSearch] = useState("");

/* PAGINATION */

const [currentPage,setCurrentPage] = useState(1);
const itemsPerPage = 4;


/* FETCH EXPERTS */

const fetchExperts = async()=>{

try{

const res = await axios.get("https://topshine-backend.onrender.com/api/expert");
setExperts(res.data);

}catch(err){

console.log(err);

}

};


/* DELETE EXPERT */

const handleDelete = async(id)=>{

if(window.confirm("Delete this expert?")){

try{

await axios.delete(`https://topshine-backend.onrender.com/api/expert/${id}`);
fetchExperts();

}catch(err){

console.log(err);

}

}

};


/* SEARCH FILTER */

const filteredExperts = experts.filter((expert)=>
expert.name.toLowerCase().includes(search.toLowerCase())
);

 
/* PAGINATION LOGIC */

const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;

const currentExperts = filteredExperts.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(filteredExperts.length / itemsPerPage);


/* PAGE CHANGE */

const nextPage = () => {

if(currentPage < totalPages){
setCurrentPage(currentPage + 1);
}

};

const prevPage = () => {

if(currentPage > 1){
setCurrentPage(currentPage - 1);
}

};


useEffect(()=>{

fetchExperts();

},[]);


return(

<div className="admin-container">

<Sidebar/>

<div className="admin-content">

{/* HEADER */}

<div className="topbar">

<h3 style={{ fontFamily: "'Nunito', sans-serif" }}>Our Experts</h3>

<NavLink to="/admin/experts/add">

<button className="add-btn">
+ Add Expert
</button>

</NavLink>

</div>


{/* SEARCH */}

<div className="search-box">

<input
type="text"
placeholder="Search expert..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* TABLE */}

<div className="table-container">

<table>

<thead>

<tr>
<th>No</th>
<th>Image</th>
<th>Name</th>
<th>Designation</th>
<th>Country</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{currentExperts.length>0 ? (

currentExperts.map((expert,index)=>(

<tr key={expert._id}>

<td>{indexOfFirst + index + 1}</td>

<td>

<img
src={`https://topshine-backend.onrender.com/uploads/experts/${expert.image}`}
alt={expert.name}
className="expert-img"
/>

</td>

<td>{expert.name}</td>
<td>{expert.designation}</td>
<td>{expert.country}</td>

<td>

<NavLink to={`/admin/expert/edit/${expert._id}`}>
<button className="edit-btn">Edit</button>
</NavLink>

<button
className="delete-btn"
onClick={()=>handleDelete(expert._id)}
>
Delete
</button>

</td>

</tr>

))

):(


<tr>

<td colSpan="6" className="no-data">
No Experts Found
</td>

</tr>

)}

</tbody>

</table>

</div>


{/* PAGINATION */}

<div className="pagination">

<button
onClick={prevPage}
disabled={currentPage === 1}
>
Previous
</button>

<span>
Page {currentPage} of {totalPages}
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

export default ExpertTable;