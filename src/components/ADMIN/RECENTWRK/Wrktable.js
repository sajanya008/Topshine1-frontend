import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Sidebar from "../SIDEBAR/Sidebar";
import "./Wrktable.css";

function WrkTable(){

const [recentworks,setRecentworks] = useState([]);
const [search,setSearch] = useState("");
const [currentPage,setCurrentPage] = useState(1);

const rowsPerPage = 4;

useEffect(()=>{
fetchRecentworks();
},[]);


const fetchRecentworks = async()=>{

try{

const res = await axios.get("https://topshine-backend.onrender.com/api/recentworks");

setRecentworks(res.data);

}catch(err){
console.log(err);
}

};


const deleteRecentwork = async(id)=>{

if(window.confirm("Are you sure you want to delete?")){

try{

await axios.delete(`https://topshine-backend.onrender.com/api/recentworks/${id}`);

fetchRecentworks();

}catch(err){
console.log(err);
}

}

};


/* SEARCH */

const filteredWorks = recentworks.filter(work =>
(work.name || "").toLowerCase().includes(search.toLowerCase())
);


/* PAGINATION */

const indexOfLast = currentPage * rowsPerPage;
const indexOfFirst = indexOfLast - rowsPerPage;

const currentWorks = filteredWorks.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(filteredWorks.length / rowsPerPage);


/* NEXT */

const nextPage = ()=>{

if(currentPage < totalPages){

setCurrentPage(currentPage + 1);

}

};


/* PREVIOUS */

const prevPage = ()=>{

if(currentPage > 1){

setCurrentPage(currentPage - 1);

}

};


return(

<div className="admin-container">

<Sidebar/>

<div className="admin-content">

<div className="topbar">

<h3>Recent Works</h3>

<NavLink to="/admin/recentworks/add">
<button className="add-btn">+ Add Work</button>
</NavLink>

</div>


{/* SEARCH */}

<div className="search-box">

<input
type="text"
placeholder="Search work..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* TABLE */}

<div className="table-container">

<table>

<thead>

<tr>
<th>#</th>
<th>Image</th>
<th>Name</th>
<th>Description</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{currentWorks.length > 0 ? (

currentWorks.map((work,index)=>(

<tr key={work._id}>

<td>{indexOfFirst + index + 1}</td>

<td>

<img
src={`https://topshine-backend.onrender.com/uploads/recentworks/${work.image}`}
alt={work.name}
className="wrk-img"
/>

</td>

<td>{work.name}</td>

<td>{work.description}</td>

<td>

<NavLink to={`/admin/recentworks/edit/${work._id}`}>
<button className="edit-btn">Edit</button>
</NavLink>

<button
className="delete-btn"
onClick={()=>deleteRecentwork(work._id)}
>
Delete
</button>

</td>

</tr>

))

) : (

<tr>
<td colSpan="5" className="no-data">
No Works Found
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

);

}

export default WrkTable;