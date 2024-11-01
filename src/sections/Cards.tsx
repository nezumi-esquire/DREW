"use client";

import React, { useEffect } from "react";
import { heroSlides } from "@/data/data";
import "./cards.css";

import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// mods
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroSlide from "./HeroSlide";

export default function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper>
              {heroSlides.map((slide) => (
                <SwiperSlide>
                  <HeroSlide slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
