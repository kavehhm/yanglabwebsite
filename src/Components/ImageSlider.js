import { useState, useEffect,useRef } from "react";
import "./ImageSlider.css";
import carousel1 from "../Slides/carousel_1.png";
import carousel2 from "../Slides/carousel_2.png";
import carousel3 from "../Slides/carousel_3.png";
import carousel4 from "../Slides/carousel_4.png";
import carousel5 from "../Slides/carousel_5.png";
import carousel6 from "../Slides/carousel_6.png";
import carousel7 from "../Slides/carousel_7.png";
import carousel8 from "../Slides/carousel_8.png";
import carousel9 from "../Slides/carousel_9.png";
import carousel10 from "../Slides/carousel_10.png";
import carousel11 from "../Slides/carousel_11.png";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
    carousel10,
    carousel11,
  ];

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'inline-block'
  };

  const goLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goRight = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      8000
    );
    return () => {
        resetTimeout()
    }
  }, [currentIndex, images.length]);

  return (
    <div className="sliderStyles">
      <div className="leftArrowStyles" onClick={goLeft}>
        ◄
      </div>
      <div className="rightArrowStyles" onClick={goRight}>
        ►
      </div>
      <div style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }} className="slideshowSlider">
        {images.map((image, index) => (
          <div
            key={index}
            style={{ ...slideStyles, backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
