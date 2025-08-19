import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function OfficeCarousel() {
  const slideRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

   const images = [
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Therapy-2-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Therapy-office-1-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Art_1-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Art_2-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Building-Back-768x575.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Cafeteria_1-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Cafeteria_2-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Case-Mangagment-room-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Cholla-Behavioral-Health-Buliding-1-768x575.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Confrence-Room-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/CourtYard_1-768x512.jpg',
    'https://chollabehavioralhealth.com/wp-content/uploads/2024/06/Courtyard_2-768x512.jpg',
  ];

  const nextSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.office-item');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.office-item');
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .office-title {
          font-family: sans-serif;
          text-align: center;
          color: #3b97d0;
          font-size: 3rem;
        }

        .office-slider-container {
          width: 100%;
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          background-color: transprent;
          box-shadow: 0 30px 50px #bdbdbd;
          position: relative;
        }

        .office-slide {
          width: max-content;
          margin-top: 30px;
          position: relative;
          height: 280px;
        }

        .office-item {
          width: 400px;
          height: 280px;
          background-position: 50% 50%;
          display: inline-block;
          transition: 1s;
          background-size: 200%;
          position: absolute;
          z-index: 1;
          border-radius: 0px;
          overflow: hidden;
          cursor: pointer;
        }

        .office-item:nth-child(1) {
          transform: translate(-150%);
          background-position: 0% 50%;
          opacity: 0;
        }

        .office-item:nth-child(2) {
          transform: translate(-40%);
          background-position: 20% 50%;
          opacity: 1;
          z-index: 2;
        }

        .office-item:nth-child(3) {
          transform: translate(70%);
          background-position: 50% 50%;
          opacity: 1;
          z-index: 3;
        }

        .office-item:nth-child(4) {
          transform: translate(180%);
          background-position: 80% 50%;
          opacity: 1;
          z-index: 2;
        }

        .office-item:nth-child(n+5) {
          transform: translate(290%);
          background-position: 100% 50%;
          opacity: 0;
          z-index: 1;
        }

        .office-item:hover {
          background-size: 250%;
        }

        .office-buttons {
          margin-top: 30px;
          text-align: center;
        }

        .office-buttons button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid transprent ;
          transition: 0.5s;
          background: transparent;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 5px;
          background-color: #3b97d0;
          color: white;
        }

        .office-buttons button:hover {
          background-color: white;
          color: red;
          border: 1px solid grey;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          max-height: 90vh;
        }

        .modal-close {
          position: absolute;
          top: -20px;
          right: -20px;
          background: white;
          color: black;
          border-radius: 50%;
          cursor: pointer;
          padding: 5px;
          border: 1px solid gray;
        }

        @media (max-width: 768px) {
          .office-title {
            font-size: 2rem;
          }

          .office-slider-container {
            max-width: 100%;
            padding: 10px;
          }

          .office-slide {
            height: 250px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .office-item {
            width: 90%;
            max-width: 350px;
            height: 240px;
            background-size: cover !important;
          }

          /* Mobile: Show only one image with smooth animation */
          .office-item:nth-child(1) {
            transform: translate(-120%);
            opacity: 0;
          }

          .office-item:nth-child(2) {
            transform: translate(-60%);
            opacity: 0;
          }

          .office-item:nth-child(3) {
            transform: translate(0%);
            opacity: 1;
            z-index: 3;
            left: 50%;
            margin-left: -175px;
          }

          .office-item:nth-child(4) {
            transform: translate(60%);
            opacity: 0;
          }

          .office-item:nth-child(n+5) {
            transform: translate(120%);
            opacity: 0;
          }
        }

        @media (max-width: 480px) {
          .office-title {
            font-size: 1.5rem;
            padding: 0 10px;
          }

          .office-slider-container {
            margin: 20px auto;
            padding: 5px;
          }

          .office-slide {
            height: 200px;
          }

          .office-item {
            height: 180px !important;
            max-width: 300px !important;
          }

          .office-item:nth-child(3) {
            margin-left: -150px;
          }

          .office-buttons button {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="office-slider-container">
        <h1 className="office-title">
          Take A Look Around <br />
          Our Office!
        </h1>

        <div className="office-slide" ref={slideRef}>
          {images.map((url, index) => (
            <div
              key={index}
              className="office-item"
              style={{ backgroundImage: `url("${url}")` }}
              onClick={() => openModal(url)}
            />
          ))}
        </div>

        <div className="office-buttons">
          <button onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full View" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default OfficeCarousel;