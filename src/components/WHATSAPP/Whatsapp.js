import React from 'react'
import "./Whatsapp.css";

export default function Whatsapp() {
    const phoneNumber = "+971565471927"; // 
    const message = "Hello! I would like to book a service at your topshine cleaning service company."; // Customize your

    const whatsappUrl= `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div>
      <a href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
    rel="noopener noreferrer"
    >
        <i className="bi bi-whatsapp "></i>
      </a>
    </div>
  )
}
