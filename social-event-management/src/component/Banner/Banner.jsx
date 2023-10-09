import React, { useState, useEffect } from "react";
import birthdayImage from "../../assets/images/event_1.avif";
import weddingImage from "../../assets/images/event_2.avif";
import anniversaryImage from "../../assets/images/event_3.avif";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSearchClick = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const slideCount = 3; // We have 3 slides in the Banner component
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        if (prevSlide === slideCount) return 1;
        return prevSlide + 1;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] mb-10 overflow-hidden">
      {/* Carousel */}
      <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="carousel w-full h-full relative z-0 opacity-70">
    <div id="item1" className={`carousel-item w-full h-full ${activeSlide !== 1 ? 'hidden' : ''}`}>
      <img src={birthdayImage} className="w-full h-full object-cover" alt="Birthday" />
    </div>
    <div id="item2" className={`carousel-item w-full h-full ${activeSlide !== 2 ? 'hidden' : ''}`}>
      <img src={weddingImage} className="w-full h-full object-cover" alt="Wedding" />
    </div>
    <div id="item3" className={`carousel-item w-full h-full ${activeSlide !== 3 ? 'hidden' : ''}`}>
      <img src={anniversaryImage} className="w-full h-full object-cover" alt="Anniversary" />
    </div>
  </div>
</div>

      {/* Search bar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="mb-10">
          <h2 className="text-5xl text-orange-700 font-semibold">We Arrange</h2>
          <h2 className="text-5xl font-semibold">You</h2>
          <h2 className="text-5xl font-semibold">Celebrate</h2>
          <p className="mt-4 text-white">Planning a weding, Birthday, Engagement, Anniversary or any other Events in our City is not easy. <br/>
              and it takes skills to make it look all easy-going and we do that for you.
          </p>
        </div>
        <div className="relative flex w-full max-w-md">
          <input
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow w-full pl-3 py-2 border rounded-l-md border-gray-300 sm:text-sm"
            placeholder="Search for services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="flex items-center justify-center px-4 py-2 border border-red-500 rounded-r-md bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
      </div>
    </div>
  );
};

export default Banner;
