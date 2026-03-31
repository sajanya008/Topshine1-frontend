import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Servicepage.css";

export default function Servicepage( ) {
  return (
    <div className="service-banner">
      <img src={image} alt="banner" className="service-banner-img" />
      <h1 className="service-banner-title">Services</h1>
    </div>
  );
}