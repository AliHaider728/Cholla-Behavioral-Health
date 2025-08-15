import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Slider.css";

const heroSlides = [
  {
    title: "You Deserve To Well",
    subtitle: "Welcome to Cholla",
    description:
      "Bridging the gap between medicine and mental well-being through collaborative care.",
    image: "https://images.pexels.com/photos/7322375/pexels-photo-7322375.jpeg",
  },
  {
    title: "Comprehensive Mental Health Care",
    subtitle: "Expert Treatment",
    description:
      "Personalized care plans for addiction, emotional challenges, and mental health needs.",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
  },
  {
    title: "Recovery is a Journey",
    subtitle: "Lifelong Support",
    description:
      "Continuous support and personal development at your own pace.",
    image: "https://images.pexels.com/photos/6011569/pexels-photo-6011569.jpeg",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const timeRunning = 2000;
  const timeAutoNext = 4000;
  const runNextAutoRef = useRef(null);

  const showSlider = (type) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const nextSlide =
      type === "next"
        ? (currentSlide + 1) % heroSlides.length
        : (currentSlide - 1 + heroSlides.length) % heroSlides.length;

    setCurrentSlide(nextSlide);

    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
    }

    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove("next", "prev");
      }
      setIsTransitioning(false);
    }, timeRunning);
  };

  useEffect(() => {
    if (runNextAutoRef.current) {
      clearTimeout(runNextAutoRef.current);
    }

    runNextAutoRef.current = setTimeout(() => {
      if (!isTransitioning) {
        showSlider("next");
      }
    }, timeAutoNext);

    return () => {
      if (runNextAutoRef.current) {
        clearTimeout(runNextAutoRef.current);
      }
    };
  }, [currentSlide, isTransitioning]);

  return (
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
              <div className="buttons">
                <NavLink to="/contact-us">
                  <button>
                    <span>Start Your Recovery</span>
                  </button>
                </NavLink>
                <a href="tel:+14807906666">
                  <button>
                    <span>Call Now</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {heroSlides.map((slide, index) => (
          <div key={index} className="item">
            <img src={slide.image} alt={slide.title} />
            <div className="content"></div>
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
  );
};

export default Carousel;
