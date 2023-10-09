import React, { useEffect, useState } from "react";

// Import images
import birthdayImage from "../../assets/images/birthday.avif";
import weddingImage from "../../assets/images/wedding.avif";
import anniversaryImage from "../../assets/images/anniversary.avif";
import babyShowerImage from "../../assets/images/babyshower.avif";
import engagementImage from "../../assets/images/engagement.avif";
import getTogetherImage from "../../assets/images/getTogether.avif";


const Gallery = () => {

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        const slideCount = 6;
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => {
                if (prevSlide === slideCount) return 1;
                return prevSlide + 1;
            });
        }, 2000); // 

        return () => clearInterval(interval);
    }, []);


  return (
    <div className="mt-10 mb-10">
        
      <div className="carousel w-3/4 overflow-hidden h-[55vh] ">
        
      <div id="slide1" className={`carousel-item relative w-full ${activeSlide !== 1 ? 'hidden' : ''}`}>
          <img
            src={weddingImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${activeSlide !== 2 ? 'hidden' : ''}`}>
          <img
            src={birthdayImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${activeSlide !== 3 ? 'hidden' : ''}`}>
          <img
            src={engagementImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${activeSlide !== 4 ? 'hidden' : ''}`}>
          <img
            src={anniversaryImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className={`carousel-item relative w-full ${activeSlide !== 5 ? 'hidden' : ''}`}>
          <img
            src={getTogetherImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className={`carousel-item relative w-full ${activeSlide !== 6 ? 'hidden' : ''}`}>
          <img
            src={babyShowerImage}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
