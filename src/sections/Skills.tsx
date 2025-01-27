"use client";

import React, { useEffect, useState } from "react";
import "./skills.css";
import { exps, skills } from "@/data/data";
import AOS from "aos";

export default function Skills() {
  const [typingDemo, setTypingDemo] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    if (typingDemo) {
      const text =
        "This is a demo of typing at 98 words per minute. Watch as the text fills out automatically!";
      const wordsPerMinute = 98;
      const delay = (60 / wordsPerMinute) * 1000;

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(intervalId);
        }
      }, delay / 5);

      return () => clearInterval(intervalId);
    }
  }, [typingDemo, currentIndex]);

  const handleTypingDemo = () => {
    setTypingDemo(true);
    setTypedText("");
    setCurrentIndex(0);
  };

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
          {skills.map((skill) => (
            <li
              key={skill.id}
              onClick={skill.skill === "98+ WPM" ? handleTypingDemo : undefined}
            >
              {skill.skill}
            </li>
          ))}
        </ul>
        {typingDemo && <div className="typing-demo">{typedText}</div>}
      </div>
    </div>
  );
}
