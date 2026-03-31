import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Contactbanner.css";

export default function Contactbanner( ) {
  return (
    <div className="contact-banner">
      <img src={image} alt="banner" className="contact-banner-img" />
      <h1 className="contact-banner-title">contact</h1>
    </div>
  );
}