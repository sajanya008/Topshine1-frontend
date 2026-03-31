import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Expert.css";

const CleaningExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetchExperts();
  }, []);

  const fetchExperts = async () => {
    try {
      const res = await axios.get("https://topshine-backend.onrender.com/api/expert");
      setExperts(res.data);
    } catch (error) {
      console.log("Error fetching experts:", error);
    }
  };

  return (
    <section className="expert-section " data-aos="fade-up">
      <div className="expert-container">
        <div className="expert-header">
          <h4>OUR EXPERTS</h4>
          <h2>Meet Our Cleaning Experts</h2>
          <p>Skilled professionals delivering trusted cleaning services</p>
        </div>

        <div className="expert-grid">
          {experts.map((expert) => (
            <div className="expert-card" key={expert._id}>
              <img
                src={`https://topshine-backend.onrender.com/uploads/experts/${expert.image}`}
                alt={expert.name}
              />

              <h4>{expert.name}</h4>

              {/* Changed position → designation */}
              <span className="position">
                {expert.designation}
              </span>

              <span className="nationality">
                {expert.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningExperts;