
import React from "react";
import pic3 from "../IMAGES/maids.jpg";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section container-fluid">
      <div className="row align-items-center justify-content-center">

        {/* IMAGE SIDE */}
        <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-center"  data-aos="fade-right">
          <div className="image-card">
            <img src={pic3} className="about-img" alt="About Top Shine" />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="col-lg-6 col-md-12 about-content" data-aos="fade-left">
          <h6 className="why-subtitlee">ABOUT US</h6>

          <h2 className="about-heading">
            Welcome to <span>TOP SHINE</span>
          </h2>

          <p className="about-text">
            We are a professional cleaning company dedicated to delivering high-quality,
            reliable, and affordable cleaning services for homes and offices.
            Our mission is to create clean, fresh, and healthy environments that enhance comfort and productivity.
            <br /><br />
            With a team of trained professionals and the use of safe, eco-friendly cleaning
            products, we ensure every space receives exceptional care and attention to detail.
          </p>

          {/* CHECKLIST */}
          <div className="about-checklist">

            <div className="check-item">
              <span className="tick-box"></span>
              <span>Licensed & Insured</span>
            </div>

            <div className="check-item">
              <span className="tick-box"></span>
              <span>We always keep you up to date on your cleaning</span>
            </div>

            

            <div className="check-item">
              <span className="tick-box"></span>
              <span>Professional staff with attention to detail</span>
            </div>

            <div className="check-item">
              <span className="tick-box"></span>
              <span>Safe, eco-friendly cleaning solutions</span>
            </div>

          </div>

          <Link to="/about" className="about-btn">
            READ MORE
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;