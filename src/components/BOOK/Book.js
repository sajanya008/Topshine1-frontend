import React from "react";
import "./Book.css";
import bookingImg from "../IMAGES/ChatGPT Image Feb 1, 2026, 06_32_23 PM.png";

import { useFormik } from "formik";
import * as Yup from "yup";

function Book() {

  const today = new Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      services: "",
      date: "",
      message: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Enter valid phone number")
        .required("Phone is required"),

      services: Yup.string()
        .required("Select a service"),

      date: Yup.date()
        .min(
          new Date(new Date().setHours(0, 0, 0, 0)),
          "Date cannot be in the past"
        )
        .required("Select a date"),

      message: Yup.string()
    }),

    onSubmit: (values, { resetForm }) => {
      try {
       
        const message = `
🧹 *New Booking Request*

👤 Name: ${values.name}
📧 Email: ${values.email}
📱 Phone: ${values.phone}
🛠 Service: ${values.services}
📅 Date: ${values.date}
📝 Message: ${values.message || "None"}
        `;

      
        const phoneNumber = "971565471927";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

        resetForm();

      } catch (error) {
        alert("Something went wrong");
      }
    }
  });

  return (
    <section className="reservation-section" data-aos="flip-up">

      {/* IMAGE */}
      <div className="reservation-image">
        <img src={bookingImg} alt="Booking" />
      </div>

      {/* FORM */}
      <div className="reservation-form">
        <span className="small-title">Booking</span>
        <h1>Book A Service</h1>

        <form onSubmit={formik.handleSubmit}>

          <div className="form-row">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="error">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="error">{formik.errors.phone}</p>
              )}
            </div>

            <div>
              <select {...formik.getFieldProps("services")}>
                <option value="">Select Service</option>
                <option value="General Cleaning">General Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                <option value="Bathroom Cleaning">Bathroom Cleaning</option>
              </select>
              {formik.touched.services && formik.errors.services && (
                <p className="error">{formik.errors.services}</p>
              )}
            </div>
          </div>

          {/* DATE */}
          <input
            type="date"
            name="date"
            min={today}
            {...formik.getFieldProps("date")}
          />
          {formik.touched.date && formik.errors.date && (
            <p className="error">{formik.errors.date}</p>
          )}

          <textarea
            name="message"
            placeholder="Special Request"
            {...formik.getFieldProps("message")}
          ></textarea>

          <button type="submit" className="reserve-btn">
            BOOK NOW
          </button>

        </form>
      </div>
    </section>
  );
}

export default Book;