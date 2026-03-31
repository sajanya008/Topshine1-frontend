import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

import Sidebar from "../SIDEBAR/Sidebar";
import "./PackageTable.css";

function PackageTable() {

const [packages,setPackages] = useState([]);
const [search,setSearch] = useState("");
const [currentPage,setCurrentPage] = useState(1);

const rowsPerPage = 4;


/* FETCH PACKAGES */

const fetchPackages = async()=>{

try{

const res = await axios.get("https://topshine-backend.onrender.com/api/package/all");

setPackages(res.data.data);

}catch(error){

console.log(error);

}

};


useEffect(()=>{

fetchPackages();

},[]);


/* DELETE */

const deletePackage = async(id)=>{

if(window.confirm("Are you sure you want to delete?")){

try{

await axios.delete(`https://topshine-backend.onrender.com/api/package/delete/${id}`);

fetchPackages();

}catch(error){

console.log(error);

}

}

};


/* ICON MAP */

const iconMap = {

calendar:<FaCalendarAlt/>,
cleaning:<MdOutlineCleaningServices/>,
daily:<FaRegClock/>

};


/* SEARCH */

const filteredPackages = packages.filter(pkg =>
pkg.title.toLowerCase().includes(search.toLowerCase())
);


/* PAGINATION */

const indexOfLast = currentPage * rowsPerPage;
const indexOfFirst = indexOfLast - rowsPerPage;

const currentPackages = filteredPackages.slice(indexOfFirst,indexOfLast);

const totalPages = Math.ceil(filteredPackages.length / rowsPerPage);


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

<h3 style={{ fontFamily: "'Nunito', sans-serif" }}>Packages List</h3>

<NavLink to="/admin/packages/add">
<button className="add-btn">
+ Add Package
</button>
</NavLink>

</div>


{/* SEARCH */}

<div className="search-box">

<input
type="text"
placeholder="Search package..."
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
<th>Icon</th>
<th>Title</th>
<th>Duration</th>
<th>Price (AED)</th>
<th>Description</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{currentPackages.length > 0 ? (

currentPackages.map((pkg,index)=>(

<tr key={pkg._id}>

<td>{indexOfFirst + index + 1}</td>

<td className="icon-cell">
{iconMap[pkg.icon] || "-"}
</td>

<td>{pkg.title}</td>
<td>{pkg.duration}</td>
<td>{pkg.price}</td>
<td>{pkg.description}</td>

<td>

<NavLink to={`/admin/packages/edit/${pkg._id}`}>
<button className="edit-btn">
Edit
</button>
</NavLink>

<button
className="delete-btn"
onClick={()=>deletePackage(pkg._id)}
>
Delete
</button>

</td>

</tr>

))

) : (

<tr>

<td colSpan="7" className="no-data">
No Packages Found
</td>

</tr>

)}

</tbody>

</table>

</div>


{/* PAGINATION BELOW CARD */}

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

export default PackageTable;