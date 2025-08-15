import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const OwlSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const slides = [
   
    {
      id: 1,
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/2148366499-1-600x400.webp",
      title: "Advanced Technology",
      description: "We use cutting-edge therapeutic tools and technologies for better outcomes and enhanced patient experience.",
      accent: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/61173-1-600x400.webp",
      title: "Modern Facilities",
      description: "Our comfortable, state-of-the-art facilities create a healing environment designed for recovery and wellness.",
      accent: "from-purple-500 to-violet-600"
    },
    {
      id: 3,
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/1289-1-600x400.webp",
      title: "Personalized Treatment",
      description: "Every treatment plan is tailored to meet your individual needs, goals, and unique circumstances.",
      accent: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/21089-1-600x400.webp",
      title: "Integrated Care",
      description: "We coordinate all aspects of your care for comprehensive treatment and seamless healthcare experience.",
      accent: "from-amber-500 to-orange-600"
    },
    {
      id: 5,
      image: "https://chollabehavioralhealth.com/wp-content/uploads/2024/06/73860-1-600x400.webp",
      title: "Group Therapy Sessions",
      description: "Connect with others on similar journeys in supportive group settings with professional guidance.",
      accent: "from-cyan-500 to-blue-600"
    }
  ];

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isPlaying]);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = -2; i < 3; i++) {
      const index = (currentSlide + i + slides.length) % slides.length;
      visibleSlides.push({ ...slides[index], position: i });
    }
    return visibleSlides;
  };

  return (
    <div className="width relative bg-gradient-to-br from-gray-50  to-gray-100 rounded-3xl shadow-2xl overflow-hidden">
       <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #3b97d0 0%, transparent 50%), radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%)'
        }}></div>
      </div>
 
      <div className="hidden  w-full lg:block relative z-10 h-96 overflow-hidden">
        <div className="relative h-full flex items-center justify-center w-full">
          {getVisibleSlides().map((slide, index) => {
            const position = slide.position;  
            return (
              <div
                key={`${slide.id}-${currentSlide}-${position}`}
                className={`group absolute transition-all duration-1000 ease-out transform-gpu ${
                  position === 0 
                    ? 'z-30 shadow-3xl' 
                    : Math.abs(position) === 1
                      ? 'z-20 shadow-xl opacity-90'
                      : 'z-10 shadow-lg opacity-70'
                }`}
                style={{
                  width: position === 0 ? '350px' : Math.abs(position) === 1 ? '280px' : '240px',
                  left: `calc(50% + ${position * 220}px)`,
                  transform: `translateX(-50%) scale(${
                    position === 0 ? 1.1 : Math.abs(position) === 1 ? 0.95 : 0.85
                  }) rotateY(${position * -8}deg) rotateZ(${position * 1}deg)`,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-white/20 backdrop-blur-sm">
                 
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />
  
                    <div className={`absolute inset-0 bg-gradient-to-t ${slide.accent} opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>                   
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content - Only show on center and adjacent slides */}
                  {Math.abs(position) <= 1 && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="transform transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                        <h3 className={`font-bold mb-3 text-shadow-lg ${
                          position === 0 ? 'text-2xl' : 'text-xl'
                        }`}>
                          {slide.title}
                        </h3>
                        <div className="overflow-hidden">
                          <p className={`text-gray-200 leading-relaxed transform transition-all duration-700 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
                            position === 0 ? 'text-sm' : 'text-xs'
                          }`}>
                            {slide.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`h-full bg-gradient-to-r ${slide.accent} transform transition-all duration-1000 scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                      </div>
                    </div>
                  )}

                  {/* Card Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/20">
                    {slide.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View - 1 slide */}
      <div className="lg:hidden relative z-10 p-8">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="relative h-96">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].accent} opacity-10`}></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">{slides[currentSlide].title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{slides[currentSlide].description}</p>
              
              {/* Mobile Progress Bar */}
              <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${slides[currentSlide].accent} rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 hover:text-[#3b97d0] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-40 backdrop-blur-sm border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 hover:text-[#3b97d0] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-40 backdrop-blur-sm border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-white/95 hover:bg-white text-gray-700 hover:text-[#3b97d0] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 backdrop-blur-sm border border-white/20"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center pb-8 pt-4 space-x-2 relative z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative transition-all duration-500 disabled:cursor-not-allowed ${
              index === currentSlide 
                ? 'w-12 h-4' 
                : 'w-4 h-4 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? `bg-gradient-to-r ${slide.accent} shadow-lg` 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}></div>
            
            {/* Active indicator glow */}
            {index === currentSlide && (
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${slide.accent} opacity-30 animate-pulse`}></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium border border-white/10 z-40">
        <span className="font-bold">{currentSlide + 1}</span>
        <span className="text-gray-300 mx-1">/</span>
        <span>{slides.length}</span>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
};

export default OwlSlider;