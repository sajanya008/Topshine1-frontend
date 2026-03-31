import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Video2 from "../IMAGES/crslvideo1.mp4";
import Video1 from "../IMAGES/crslvideo2.mp4";
import Video3 from "../IMAGES/crslvideo3.mp4";


// import Image3 from "../IMAGES/maids.jpg";
// import Image2 from "../IMAGES/ChatGPT Image Mar 2, 2026, 10_35_55 PM (1).png";
// import Image3 from "../IMAGES/professional-cleaning-service-people-working-together-office.jpg";

import { NavLink } from "react-router-dom";
import "./Crsl.css";

export default function Crsl() {
  return (
    <div className="hero-container mt-5">
      <div className="hero-left" data-aos="fade-right">
     
          <h1 class="crsl-titlee">Premium Cleaning Services in Dubai</h1>
          {/* <strong>Premium Cleaning Services in Dubai</strong> */}
       

        <h3 className="hero-sub">
          “We deliver top-quality residential and commercial cleaning services across Dubai. Our trained professionals ensure spotless spaces, healthy environments, and exceptional customer satisfaction — every time.”
        </h3>

        <div className="hero-buttons">
          <NavLink to="/book" className="hero-btn book">
            Book Your Service
          </NavLink>
          {/* <NavLink to="/menu" className="hero-btn menu">
            View Menu
          </NavLink> */}
        </div>
      </div>

      <div className="hero-right" data-aos="fade-left">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          grabCursor={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          className="modern-swiper"
        >

         <SwiperSlide className="custom-slide">
  <div className="img-card">
    <video 
      src={Video3} 
      autoPlay 
      loop 
      muted 
      playsInline
      className="slide-video"
    />
  </div>
</SwiperSlide>

<SwiperSlide className="custom-slide">
  <div className="img-card">
    <video 
      src={Video1} 
      autoPlay 
      loop 
      muted 
      playsInline
      className="slide-video"
    />
  </div>
</SwiperSlide>

          <SwiperSlide className="custom-slide">
  <div className="img-card">
    <video 
      src={Video2} 
      autoPlay 
      loop 
      muted 
      playsInline
      className="slide-video"
    />
  </div>
</SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
}