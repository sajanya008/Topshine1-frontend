import React from "react";
import "./Howitwork.css";
import { FaCalendarCheck, FaCheck, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowItworks = () => {
  return (
    <section className="how-section" data-aos="zoom-in-up">
      <h6 className="how-subtitle">How it works</h6>
      <h2 className="how-title">Quick & Easy</h2>

      <div className="how-wrapper">

        {/* STEP 1 */}
        <div className="how-step" >
          <div className="circle">
            <FaCalendarCheck />
          </div>
          <div className="step-text">
            <h4>Book Consultations</h4>
            <p>Call us or write a message in the contact form below.</p>
          </div>
        </div>

        {/* SIMPLE ARROW */}
        <div className="arrow-line"></div>

        {/* STEP 2 */}
        <div className="how-step center-step">
          <div className="circle center-circle">
            <FaCheck />
          </div>
          <div className="step-text">
            <h4>Choose Your Package</h4>
            <p>We offer cleaning packages tailored to your needs.</p>
          </div>
        </div>

        {/* SIMPLE ARROW */}
        <div className="arrow-line"></div>

        {/* STEP 3 */}
        <div className="how-step">
          <div className="circle">
            <FaStar />
          </div>
          <div className="step-text">
            <h4>We Clean, You Relax</h4>
            <p>Professional cleaning with best quality service.</p>
          </div>
        </div>

      </div>

      <Link to="/book"><button className="how-btn">Get Started</button></Link>
    </section>
  );
};

export default HowItworks;