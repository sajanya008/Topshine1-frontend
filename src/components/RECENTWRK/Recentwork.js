import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recentwrk.css";

function RecentWorks() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get(
          "https://topshine-backend.onrender.com/api/recentworks"
        );
        setWorks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div className="recent-section" data-aos="fade-down">
      <h4 className="sub-titlee">
        OUR WORK
      </h4>
      <h2 className="recentwrk-title">
        Explore Our Latest Projects
      </h2>

      <div className="recent-slider">
        <div className="recent-track">

          {/* ORIGINAL */}
          {works.map((work) => (
            <div className="recent-card" key={work._id}>
              <img
                src={`https://topshine-backend.onrender.com/uploads/recentworks/${work.image}`}
                alt={work.name}
              />
              <div className="overlay">
                <h3>{work.name}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}

          {/* DUPLICATE (for smooth loop) */}
          {works.map((work) => (
            <div className="recent-card" key={"dup-" + work._id}>
              <img
                src={`https://topshine-backend.onrender.com/uploads/recentworks/${work.image}`}
                alt={work.name}
              />
              <div className="overlay">
                <h3>{work.name}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default RecentWorks;