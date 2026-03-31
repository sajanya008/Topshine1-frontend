import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Pricepage.css";

export default function Pricepage( ) {
  return (
    <div className="price-banner">
      <img src={image} alt="banner" className="price-banner-img" />
      <h1 className="price-banner-title">Packages</h1>
    </div>
  );
}