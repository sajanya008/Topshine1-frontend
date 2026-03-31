import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "./Logout.css";

const LogoutButton = () => {
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        await fetch("https://topshine-backend.onrender.com/api/admin/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.log("Logout error:", err);
    }

    localStorage.removeItem("token");

    //  Important → back button block
    window.location.replace("/admin/login");
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      <FaSignOutAlt /> Logout
    </button>
  );
};

export default LogoutButton;