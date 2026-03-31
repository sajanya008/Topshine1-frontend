import axios from "axios";
import { useEffect, useState } from "react";
import "./Service.css";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("https://topshine-backend.onrender.com/api/services")
      .then(res => setServices(res.data));
  }, []);

  return (
    <section className="service-section" data-aos="fade-up">
      <p className="service-subtitle">OUR SERVICES</p>
      <h6 className="service-title">Explore Our Services</h6>

      <div className="service-container ">
        {services.map((service) => (
          <div className="service-card" key={service._id}>
            <div className="card-img">
              <img
                src={`https://topshine-backend.onrender.com/uploads/${service.image}`}
                alt={service.title}
              />
            </div>

            <div className="card-content mt-4">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/service">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;