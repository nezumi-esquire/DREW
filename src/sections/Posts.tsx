"use client";

import React, { useEffect } from "react";
import "./posts.css";
import AOS from "aos";

export default function Posts() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  });
  return (
    <div className="posts-container" data-aos="fade-up">
      LOREM IPSUM DOLOR SIT AMET AC A ACCUMSAN LACUS PRIMIS. FACILISIS APTENT
      EUISMOD FINIBUS AT PER MOLESTIE TELLUS HAC. NUNC HIMENAEOS PARTURIENT
      FUSCE FEUGIAT CRAS VEHICULA DAPIBUS TELLUS POSUERE MOLLIS. PEDE DUIS MAGNA
      SEM SED PULVINAR. VOLUTPAT MOLESTIE FERMENTUM SI NISL MI POTENTI. ENIM
      PLATEA IN ELIT SAPIEN PRETIUM PENATIBUS NATOQUE. SIT LECTUS NEC MI CURAE
      ETIAM EUISMOD ELEMENTUM TEMPOR LACUS NULLAM. RHONCUS DICTUMST ADIPISCING
      MUS AUGUE CURABITUR FACILISI LIBERO NIBH. MOLLIS NEQUE LIGULA PULVINAR EX
      ELIT ERAT TORQUENT ELEIFEND CONSECTETUR. SENECTUS FAUCIBUS AUCTOR LAOREET
      VIVAMUS CONVALLIS MONTES HABITASSE AC. NATOQUE SOCIOSQU PORTA SUSPENDISSE
      SEMPER POTENTI FINIBUS LEO MUS.
    </div>
  );
}
