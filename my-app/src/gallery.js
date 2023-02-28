import React, { useState, useEffect } from "react";
import "./gallery.css";

function Gallery({ title, images }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0)

  useEffect(() => {
    showImage(slideIndex);
  }, [slideIndex]);

  function showImage(n) {

    console.log("showImage: "+n)
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dots");
    let i;

    setSlideLength(slides.length - 1)
    console.log("length: "+slideLength)

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
    console.log(slideIndex)
  }

  function currentSlide(n) {
    setIndexWithinBoundary(n)
    console.log(slideIndex)
    showImage(slideIndex)
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
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="gallery-space"></div>
    </div>
  );
}

export default Gallery;
