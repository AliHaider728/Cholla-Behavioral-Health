import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

const heroSlides = [
  {
    title: "You Deserve To Well",
    subtitle: "Welcome to Cholla",
    description:
      "Bridging the gap between medicine and mental well-being through collaborative care.",
    image: "https://images.pexels.com/photos/33265634/pexels-photo-33265634.jpeg",
  },
  {
    title: "Comprehensive Mental Health Care",
    subtitle: "Expert Treatment",
    description:
      "Personalized care plans for addiction, emotional challenges, and mental health needs.",
    image: "https://images.pexels.com/photos/23496451/pexels-photo-23496451.jpeg",
  },
  {
    title: "Recovery is a Journey",
    subtitle: "Lifelong Support",
    description: "Continuous support and personal development at your own pace.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const timeRunning = 1000;  
  const timeAutoNext = 4000; 
  const runNextAutoRef = useRef(null);

  const showSlider = (type) => {
    if (isTransitioning) return; // Prevent multiple transitions
    setIsTransitioning(true);

    const nextSlide =
      type === "next"
        ? (currentSlide + 1) % heroSlides.length
        : (currentSlide - 1 + heroSlides.length) % heroSlides.length;

    setCurrentSlide(nextSlide);

    // Add transition class
    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
    }

    // Remove transition class after animation
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove("next", "prev");
      }
      setIsTransitioning(false);
    }, timeRunning);
  };

  // Auto-slide effect
  useEffect(() => {
    // Clear any existing timer
    if (runNextAutoRef.current) {
      clearTimeout(runNextAutoRef.current);
    }

    // Set new timer for auto-slide
    runNextAutoRef.current = setTimeout(() => {
      if (!isTransitioning) {
        showSlider("next");
      }
    }, timeAutoNext);

    // Cleanup on unmount
    return () => {
      if (runNextAutoRef.current) {
        clearTimeout(runNextAutoRef.current);
      }
    };
  }, [currentSlide, isTransitioning]); // Added isTransitioning to dependencies

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        <div className="list">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === currentSlide ? "active" : ""}`}
              style={{ zIndex: index === currentSlide ? 1 : 0 }}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                <div className="author font-bold">Welcome</div>
                <div className="title text-3xl">{slide.title}</div>
                <div className="topic">{slide.subtitle}</div>
                <div className="des">{slide.description}</div>
                <div className="buttons" >
                  <button   > Start Your Recovery</button>
                  <button  > Call Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {heroSlides.map((slide, index) => (
            <div key={index} className="item">
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                 
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button
            id="prev"
            onClick={() => showSlider("prev")}
            disabled={isTransitioning}
          >
            {"<"}
          </button>
          <button
            id="next"
            onClick={() => showSlider("next")}
            disabled={isTransitioning}
          >
            {">"}
          </button>
        </div>

        <div className="time"></div>
      </div>
    </>
  );
};

export default Carousel;