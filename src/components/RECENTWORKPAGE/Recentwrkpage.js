import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Recentwrkpage.css";

export default function Recentwrkpage( ) {
  return (
    <div className="work-banner">
      <img src={image} alt="banner" className="work-banner-img" />
      <h1 className="work-banner-title">Our Works</h1>
    </div>
  );
}