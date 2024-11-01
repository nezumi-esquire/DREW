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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
      dictum placerat. Vestibulum eleifend elementum elit, non bibendum risus
      ullamcorper quis. Mauris ullamcorper pulvinar neque eu eleifend. Maecenas
      vulputate erat cursus elit tincidunt gravida. Maecenas metus magna, porta
      et turpis sed, tristique posuere orci. Aenean ac accumsan odio, vel
      maximus justo. Proin fermentum ullamcorper tincidunt. Quisque dapibus eros
      posuere, congue ligula vitae, vehicula arcu. Integer eget magna mauris.
      Quisque et justo viverra, accumsan massa nec, rhoncus augue. Proin finibus
      vulputate eros, nec vehicula ipsum. Nulla facilisi. Praesent et metus eget
      augue scelerisque porta. Aenean sagittis ex vel rhoncus aliquam. Proin
      euismod nibh ut urna tristique pulvinar in nec nisi. Fusce pharetra
      consequat laoreet. Sed tempor ex elementum condimentum consequat.
    </div>
  );
}
