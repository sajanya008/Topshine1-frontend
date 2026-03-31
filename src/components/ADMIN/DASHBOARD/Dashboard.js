import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../SIDEBAR/Sidebar";
import "./Dashboard.css";

import {
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
  HiOutlineArchiveBox,
  HiOutlinePhoto
} from "react-icons/hi2";

function Dashboard() {

  const [experts, setExperts] = useState([]);
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [works, setWorks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  useEffect(() => {
    fetchExperts();
    fetchServices();
    fetchPackages();
    fetchWorks();
  }, []);

  /* FETCH DATA */

  const fetchExperts = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/expert");
      setExperts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/services");
      setServices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPackages = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/package/all");
      setPackages(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWorks = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/recentworks");
      setWorks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  /* PAGINATION */

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;

  const currentExperts = experts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(experts.length / rowsPerPage);

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2 className="welcome-text">Welcome, Sujith 👋</h2>
          <p className="sub-text">Here's what's happening today.</p>
        </div>

        <h2>Overview</h2>

        {/* CARDS */}
        <div className="cards">

          <div className="card">
            <div className="card-icon users">
              <HiOutlineUsers />
            </div>
            <h4>Total Experts</h4>
            <p>{experts.length}</p>
          </div>

          <div className="card">
            <div className="card-icon service">
              <HiOutlineWrenchScrewdriver />
            </div>
            <h4>Total Services</h4>
            <p>{services.length}</p>
          </div>

          <div className="card">
            <div className="card-icon package">
              <HiOutlineArchiveBox />
            </div>
            <h4>Total Packages</h4>
            <p>{packages.length}</p>
          </div>

          <div className="card">
            <div className="card-icon work">
              <HiOutlinePhoto />
            </div>
            <h4>Recent Works</h4>
            <p>{works.length}</p>
          </div>

        </div>

        {/* TABLE */}
        <div className="table-container">

          <h3>Experts List</h3>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Country</th>
              </tr>
            </thead>

            <tbody>
              {currentExperts.map((expert, index) => (
                <tr key={expert._id}>
                  <td>{indexOfFirst + index + 1}</td>

                  <td>
                    <img
                      src={`https://topshine-backend.onrender.com/experts/${expert.image}`}
                      alt="expert"
                      className="expert-img"
                    />
                  </td>

                  <td>{expert.name}</td>
                  <td>{expert.designation}</td>
                  <td>{expert.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="pagination">

          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;