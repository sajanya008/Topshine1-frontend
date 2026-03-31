import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testmonial.css";

export default function Testimonial() {
  return (
    <div className="heading text-center mt-5" data-aos="fade-up">
      <div className="sub-heading">
        <h4 className="sub-titlee">TESTIMONIALS</h4>
        <h1
          className="heading "
          style={{ fontFamily: "Nunito, sans-serif", fontWeight: "600" }}
        >
          <strong>What Our Clients Say</strong>
        </h1>
      </div>

      <section className="testimonial-section">
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{ clickable: true }}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-wrapper"
          >
            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "The team did an amazing job! My home has never felt so clean and fresh. Highly professional and reliable!"
                </p>
                <h4>— Sarah L.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "Be Better Cleaning Service exceeded my expectations. They arrived on time and left every corner sparkling!"
                </p>
                <h4>— Michael P.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "I love coming home after their cleaning service. Everything is spotless, and the team is super friendly!"
                </p>
                <h4>— Priya R.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "Professional, thorough, and affordable! I highly recommend Be Better Cleaning for any home or office."
                </p>
                <h4>— David S.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "Their attention to detail is incredible! Every surface shines and smells fresh. I’m impressed!"
                </p>
                <h4>— Emily T.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "Reliable, friendly, and efficient. They make cleaning completely stress-free for me!"
                </p>
                <h4>— Raj K.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "Amazing service! My office space looks professional and spotless thanks to Be Better Cleaning."
                </p>
                <h4>— Linda W.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <p className="mt-4">
                  "I couldn’t be happier with their service. Punctual, polite, and my home has never been cleaner!"
                </p>
                <h4>— Kevin M.</h4>
                <div className="stars">★★★★★</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}