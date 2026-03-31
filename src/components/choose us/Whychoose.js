import React from "react";
import "./WhyChoose.css";
import whyImg from "../IMAGES/whychoose.webp";     // BIG BG IMAGE
import whyImg2 from "../IMAGES/deepcleaning.webp";   // small left
import whyImg3 from "../IMAGES/generalcleaning.webp";   // small right
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="why-section" >
      <div className="container" >
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="row align-items-center" data-aos="fade-left">

  {/* LEFT IMAGE */}
  <div className="col-lg-6 why-image-wrapper order-lg-1 order-2">
    <div className="bg-stack" data-aos="fade-down-right">
      <img src={whyImg} alt="bg" className="img-bg" />
      <img src={whyImg2} alt="left" className="img-front img-front-left" />
      <img src={whyImg3} alt="right" className="img-front img-front-right" />
    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="col-lg-6 why-content order-lg-2 order-1" data-aos="fade-right">
    <h6 className="why-subtitle" >WHY CHOOSE US</h6>

    <h2 className="why-title">
      Trusted Cleaning Professionals
    </h2>

    <p className="why-text">
      We deliver high-quality cleaning services using trained
      professionals, modern equipment, and eco-friendly products.
    </p>

    <ul className="why-list">
      <li><FaCheckCircle className="tick-icon" /> Licensed & Insured</li>
      <li><FaCheckCircle className="tick-icon" /> Trained Staff</li>
      <li><FaCheckCircle className="tick-icon" /> Eco-Friendly Products</li>
      <li><FaCheckCircle className="tick-icon" /> Affordable Pricing</li>
      <li><FaCheckCircle className="tick-icon" /> Satisfaction Guarantee</li>
    </ul>

    <NavLink to="/book">
      <button className="why-btn">Book a Cleaning</button>
    </NavLink>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}