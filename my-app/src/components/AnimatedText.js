// src/components/AnimatedText.js
import React, { useState, useEffect, useRef } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ children }) => {
  const textRef = useRef(null);
  const [hasRender, setRender] = useState(false);

  useEffect(() => {
    if (!hasRender) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.5 }
      );

      if (textRef.current) {
        observer.observe(textRef.current);
      }

      setRender(true);

      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
      
    }
  }, []);

  return (
    <div ref={textRef} className="animated-text">
      {children}
    </div>
  );
};

export default AnimatedText;
