import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COMPANY INFO */}
        <div className="footer-col">
          <h2 className="footer-logo">TOP SHINE</h2>
          <p className="footer-text">
            Professional residential & commercial cleaning services.
            We ensure a spotless, healthy, and fresh environment.
          </p>

          <div className="footer-contact">
            <p><FaPhoneAlt className="contact-icon" /> +971 544751610, +971 529271168</p>
            <p><FaEnvelope className="contact-icon" /> servicetopshinecleaning@gmail.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> AL WARQAA 1, MUSHRAF, DUBAI</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+971565471927" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin/login">Admin</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/pricepage">Pricing</Link></li>
            <li><Link to="/book">Book</Link></li>
            <li><Link to="/ourteam">Our Team</Link></li>
            <li><Link to="/ourworks">Our Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/service">General Cleaning</Link></li>
            <li><Link to="/service">Deep Cleaning</Link></li>
            <li><Link to="/service">Office Cleaning</Link></li>
            <li><Link to="/service">Building Cleaning</Link></li>
            <li><Link to="/service">Kitchen Cleaning</Link></li>
            <li><Link to="/service">Bedroom & Living Area Cleaning</Link></li>
            <li><Link to="/service">Bathroom Cleaning</Link></li>
            <li><Link to="/service">Additional Tasks</Link></li>
          </ul>
        </div>

        {/* WORKING TIME */}
        <div className="footer-col">
          <h4>Working Time</h4>
          <ul>
            <li>Mon - Sat : 9.00am - 6.00pm</li>
            <li>Sunday Closed</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TopShine. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;