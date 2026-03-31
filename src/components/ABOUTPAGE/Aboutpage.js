import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Aboutpage.css";

export default function Aboutpage( ) {
  return (
    <div className="about-banner">
      <img src={image} alt="banner" className="about-banner-img" />
      <h1 className="about-banner-title">About Us</h1>
    </div>
  );
}