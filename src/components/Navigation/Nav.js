import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../IMAGES/Top_Shine__1_-removebg-preview.png";
import "./Nav.css";

export default function Navigation() {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg shadow-sm">
      <div className="container">

        {/* Logo + Brand */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="Top Shine Logo" className="nav-logo" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center text-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service">Services</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                href="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/testimonial">Testimonial</NavLink></li>
                <li><NavLink className="dropdown-item" to="/ourteam">Our Team</NavLink></li>
                <li><NavLink className="dropdown-item" to="/ourworks">Our Works</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/pricepage">Pricing</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <NavLink to="/book" className="btn booking-btn">Booking</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}