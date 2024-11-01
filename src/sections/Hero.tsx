"use client";

import React, { useEffect, useRef } from "react";
import "./hero.css";
import AOS from "aos";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    const textElement = textRef.current;
    if (textElement) {
      const textWidth = textElement.offsetWidth;
      const animationDuration = textWidth / 50;

      textElement.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
      textElement.classList.add("animate");
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-text" ref={textRef} data-aos="fade-in">
        DREW. DREW. DREW. DREW. DREW. DREW. DREW. DREW. DREW. DREW.{" "}
      </div>
    </div>
  );
}
