import React from "react";
import image from"../IMAGES/banner (2).webp";
import "./Bookpage.css";

export default function Bookpage( ) {
  return (
    <div className="book-banner">
      <img src={image} alt="banner" className="book-banner-img" />
      <h1 className="book-banner-title">Book</h1>
    </div>
  );
}