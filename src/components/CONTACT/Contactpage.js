import React, { useState } from "react";
import pic1 from "../IMAGES/vectorimg.webp";
import "./Contactpage.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// React Icons
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export default function Contactpage() {
  const [successMsg, setSuccessMsg] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Minimum 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Enter valid 10 digit number").required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Minimum 10 characters").required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const phoneNumber = "+971565471927";

    const message = ` New Contact Request

Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Subject: ${values.subject}

Message:
${values.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setSuccessMsg("Opening WhatsApp...");
    resetForm();

    setTimeout(() => setSuccessMsg(""), 3000);
    setSubmitting(false);
  };

  return (
    <div>
      {/* ===== Contact Cards ===== */}
      <div className="container py-4" data-aos="fade-up">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="contact-card">
              <MdEmail size={40} style={{ marginBottom: "10px", color: "#09bada" }} />
              <h5>Email</h5>
              <p>servicetopshinecleaning@gmail.com</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <BsTelephoneFill size={40} style={{ marginBottom: "10px", color: "#09bada" }} />
              <h5>Phone</h5>
              <p>+971 544751610, +971 529271168</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <GoLocation size={40} style={{ marginBottom: "10px", color: "#09bada" }} />
              <h5>Address</h5>
              <p>AL WARQAA 1, MUSHRAF, DUBAI</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Form Section ===== */}
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Form */}
          <div className="col-lg-6">
            <div className="form-card" data-aos="fade-right">
              <h1>Contact</h1>

              <Formik
                initialValues={{ name: "", email: "", phone: "", subject: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field name="name" placeholder="Your Name" className="form-control mb-2" />
                    <ErrorMessage name="name" component="div" className="text-danger small" />

                    <Field name="email" placeholder="Your Email" className="form-control mb-2" />
                    <ErrorMessage name="email" component="div" className="text-danger small" />

                    <Field name="phone" placeholder="Your Phone" className="form-control mb-2" />
                    <ErrorMessage name="phone" component="div" className="text-danger small" />

                    <Field name="subject" placeholder="Subject" className="form-control mb-2" />
                    <ErrorMessage name="subject" component="div" className="text-danger small" />

                    <Field as="textarea" name="message" placeholder="Message" className="form-control mb-2" />
                    <ErrorMessage name="message" component="div" className="text-danger small" />

                    <button className="submit-btn w-100 mt-2" disabled={isSubmitting}>
                      {isSubmitting ? "Opening WhatsApp..." : "Send Message"}
                    </button>

                    {successMsg && <div className="text-success">{successMsg}</div>}
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img src={pic1} alt="contact" className="img-fluid contact-img" />
          </div>

        </div>
      </div>

      {/* ===== Map ===== */}
      <div className="map-container mb-5" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps?q=25.188841,55.393090&z=14&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}