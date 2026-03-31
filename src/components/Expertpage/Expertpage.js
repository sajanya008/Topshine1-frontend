import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Expertpage.css";

export default function Expertpage( ) {
  return (
    <div className="team-banner">
      <img src={image} alt="banner" className="team-banner-img" />
      <h1 className="team-banner-title">Our Team</h1>
    </div>
  );
}