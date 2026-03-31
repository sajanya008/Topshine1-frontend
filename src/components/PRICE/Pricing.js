import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pricing.css";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

const ServicePackages = () => {
  const [packages, setPackages] = useState([]);

  const iconMap = {
    calendar: <FaCalendarAlt />,
    cleaning: <MdOutlineCleaningServices />,
    daily: <FaRegClock />,
  };

  const fetchPackages = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/package/all");
      setPackages(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <section className="packages-section mt-5 mb-5" data-aos="zoom-in-up">
      <h6 className="why-subtitle">PACKAGES</h6>
      <h2 className="section-title">
        <span></span> Service Packages <span></span>
      </h2>

      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div
            key={pkg._id}
            className={`package-card ${index === 1 ? "active" : ""}`}
          >
            {/* ICON */}
            <div className={`icon ${index === 1 ? "yellow" : "blue"}`}>
              {iconMap[pkg.icon] || <FaCalendarAlt />}
            </div>

            
                  <h4 className="package-duration">
          {/* Just show duration text without 'month' */}
          {pkg.duration?.replace(/month/i, "").trim()}
        </h4>

            {/* TITLE */}
            <h3>{pkg.title}</h3>

            {/* PRICE */}
            <h1>
              AED {pkg.price}
              {pkg.duration?.toLowerCase().includes("month") && (
                <span> / mo</span>
              )}
            </h1>

            {/* DESCRIPTION */}
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;