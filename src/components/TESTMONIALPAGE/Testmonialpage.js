import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Testmonialpage.css";

export default function Testmonialpage( ) {
  return (
    <div className="testmonial-banner">
      <img src={image} alt="banner" className="testmonial-banner-img" />
      <h1 className="testmonial-banner-title">Testmonials</h1>
    </div>
  );
}