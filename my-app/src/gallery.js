import React, { useState, useEffect } from "react";
import "./gallery.css";

function Gallery({ title, images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showImage(slideIndex);
  }, [slideIndex]);

  function showImage(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dots");
    let i;

    if (n > slides.length) {
      setSlideIndex(1);
    }

    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";

    slides[slideIndex].style.opacity = 1;
  }

  function plusIndex(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className="gallery-container">
      <div className="gallery-space"></div>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="slider-container">
        {images.map((item, index) => (
          <div className="slides fade" key={index}>
            <div className="slider-numbers">{`${index + 1}/${
              images.length
            }`}</div>
            <div className="slider-image">
              <img
                className="image-file"
                src={item}
                alt={`Image ${index + 1}`}
              />
            </div>
          </div>
        ))}

        <a className="prev" onClick={() => plusIndex(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusIndex(+1)}>
          &#10095;
        </a>

        <div className="slider-bullets" id="slider-bullets">
          {images.map((item, index) => (
            <span
              className="dots"
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
      <div className="gallery-space"></div>
    </div>
  );
}

export default Gallery;
