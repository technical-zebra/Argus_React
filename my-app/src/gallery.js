import React, { useState, useEffect, useRef } from "react";
import "./gallery.css";

function Gallery({ title, images, bgcolor }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  const containerStyle = {
    backgroundColor: bgcolor || '#e4e4e4'
  };

  function showImage(n) {
    const slides = slidesRef.current;
    const dots = dotsRef.current;
    let i;

    setSlideLength(slides.length - 1)

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.opacity = 0;
    }

    slides[n].style.display = "block";

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[n].className += " active";

    slides[n].style.opacity = 1;
  }

  function setIndexWithinBoundary(index) {
    setSlideIndex(() => {
      if (index > slideLength) {
        return 0;
      } else if (index < 0) {
        return 3;
      } else {
        return index;
      }
    });
  }

  function plusIndex(n) {
    setIndexWithinBoundary(slideIndex + n)
    showImage(slideIndex)
  }

  function currentSlide(n) {
    setIndexWithinBoundary(n)
    showImage(slideIndex)
  }

  useEffect(() => {
    showImage(slideIndex);
  }, [slideIndex]);

  return (
    <div className="gallery-container" style={containerStyle}>
      <div className="gallery-space"></div>
      <div className="gallery-title">
        <h3>{title}</h3>
      </div>
      <div className="slider-container">
        {images.map((item, index) => (
          <div className="slides fade" key={index} ref={el => slidesRef.current[index] = el}>
            <div className="slider-numbers">{`${index + 1}/${
              images.length
            }`}</div>
            <div className="slider-image">
              <img
                className="image-file"
                src={item}
                alt={`${index + 1}`}
              />
            </div>
          </div>
        ))}

        <div className="prev" onClick={() => plusIndex(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => plusIndex(+1)}>
          &#10095;
        </div>

        <div className="slider-bullets" id="slider-bullets">
          {images.map((item, index) => (
            <span
              className="dots"
              onClick={() => currentSlide(index)}
              ref={el => dotsRef.current[index] = el}
            ></span>
          ))}
        </div>
      </div>
      <div className="gallery-space"></div>
    </div>
  );
}

export default Gallery;
