import React, { useState, useEffect, useRef } from "react";
import "./gallery.scss";

/**
 * The Gallery function takes three parameters: title, images, and bgcolor. It returns a div with the
 * class name gallery-container, which contains a div with the class name gallery-space, a div with the
 * class name gallery-title, a div with the class name slider-container, and another div with the class
 * name gallery-space. The gallery-title div contains an h3 tag with the title of the gallery. The
 * slider-container div contains a div with the class name slides, which contains a div with the class
 * name slider-numbers, a div with the class name slider-image, and an img tag with the class name
 * image-file. The slider-numbers div contains the number of the image and the total number of images.
 * The slider-image div contains the image. The gallery-container div also contains a div with the
 * class name prev, a div with the class name next, and a div with the class name
 * @returns The Gallery component is being returned.
 */
function Gallery({ title, images, bgcolor }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  /* Setting the background color of the gallery container. */
  const containerStyle = {
    backgroundColor: bgcolor || '#e4e4e4'
  };

  /**
   * The showImage function is called when the user clicks on a dot. It hides all the slides, shows the
   * slide that corresponds to the dot that was clicked, and adds the active class to the dot that was
   * clicked.
   * @param n - the index of the slide to show
   */
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

  /**
   * If the index is greater than the length of the slides, return 0. If the index is less than 0,
   * return 3. Otherwise, return the index.
   * @param index - the index of the slide to be displayed
   */
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

  /**
   * The function plusIndex() takes a parameter n, which is a number. It then calls the function
   * setIndexWithinBoundary() with the parameter slideIndex + n. It then calls the function showImage()
   * with the parameter slideIndex
   * @param n - the number of slides to move forward or backward
   */
  function plusIndex(n) {
    setIndexWithinBoundary(slideIndex + n)
    showImage(slideIndex)
  }

  /**
   * It sets the slideIndex to the value of n, if n is within the boundary of the number of slides. 
   * 
   * If n is not within the boundary, it sets the slideIndex to the first or last slide, depending on
   * whether n is less than 1 or greater than the number of slides. 
   * 
   * Then it calls the showImage function, passing it the slideIndex. 
   * 
   * The showImage function will display the image at the index of the slideIndex.
   * @param n - the index of the image to show
   */
  function currentSlide(n) {
    setIndexWithinBoundary(n)
    showImage(slideIndex)
  }

  /* Calling the showImage function, passing it the slideIndex. */
  useEffect(() => {
    showImage(slideIndex);
  }, [slideIndex]);

  return (
    <div className="gallery-container" style={containerStyle}>
      <div style={{ height: "30px" }}></div>
      <div className="gallery-title">
        <h3>{title}</h3>
      </div>
      <div style={{ height: "30px" }}></div>
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
              key={"dot-"+index}
            ></span>
          ))}
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
}

export default Gallery;
