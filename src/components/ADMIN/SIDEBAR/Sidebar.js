import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  
  FaSoap,
  FaLayerGroup,
  FaUserTie,
  FaImages,
  FaBars,
 
} from "react-icons/fa";

import "./Sidebar.css";
import logo from "../Images/image.png";
import LogoutButton from "../LOGOUT/Logout";

function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  /* LOGOUT FUNCTION */

  const handleLogout = async () => {

    try {

      const token = localStorage.getItem("adminToken");

      await fetch("https://topshine-backend.onrender.com/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });

    } catch (err) {
      console.log(err);
    }

    localStorage.removeItem("adminToken");

    navigate("/admin/login", { replace: true });

  };


  return (
    <>

      {/* MENU BUTTON */}

      <FaBars
        className={`menu-icon ${sidebarOpen ? "move" : ""}`}
        onClick={toggleSidebar}
      />


      {/* SIDEBAR */}

      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>

        {/* LOGO */}

        <div className="logo">
          <img src={logo} alt="logo" className="logo-img"/>
        </div>


        {/* MENU */}

        <ul>

          <li>
            <NavLink to="/dashboard">
              <FaHome /> Dashboard
            </NavLink>
          </li>

         

          <li>
            <NavLink to="/admin/services">
              <FaSoap /> Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/packages/table">
              <FaLayerGroup /> Packages
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/experts/table">
              <FaUserTie /> Our Experts
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/recentworks/table">
              <FaImages /> Recent Works
            </NavLink>
          </li>

          {/*  */}

        </ul>


        {/* LOGOUT */}

        
          <LogoutButton/>
        
      </div>

    </>
  );
}

export default Sidebar;