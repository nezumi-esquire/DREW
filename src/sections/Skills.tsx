"use client";

import React, { useEffect } from "react";
import "./skills.css";
import { exps, skills } from "@/data/data";
import AOS from "aos";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="lang-container" data-aos="fade-up-right">
        <h1 className="skills-text">Languages</h1>
        <ul>
          {exps.map((exp) => (
            <li key={exp.id}>{exp.lang}</li>
          ))}
        </ul>
      </div>
      <div className="skills-container" data-aos="fade-up-left">
        <h1 className="skills-text">Skills</h1>
        <ul>
          {skills.map((skills) => (
            <li key={skills.id}>{skills.skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
