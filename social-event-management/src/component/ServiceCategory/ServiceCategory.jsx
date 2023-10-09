import React from "react";
import { Link } from "react-router-dom";

const ServiceCategory = ({ service }) => {
  const { id, eventType, eventImageURL, serviceDescription, pricing } = service;

  return (
    <div className="p-4">
      <div className="card shadow-xl relative overflow-hidden h-96 w-full transform transition-all duration-300 hover:scale-105 hover:brightness-125">
        {/* Absolute positioned image to cover card */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={eventImageURL}
          alt="eventImage"
        />
        {/* Flexbox overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 bg-opacity-50 bg-black">
          <h2 className="card-title text-white">{eventType}</h2>
          <div className="flex">
            <div>
            <h2 className="card-title font-md text-slate-100">Price starts @ ${pricing}</h2>
            </div>
          <div className="card-actions justify-end pl-10">
            <Link to={`/services/${id}`}>
              <button className="btn bg-gray-500 text-black bg-opacity-50">Details</button>
            </Link>
          </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};





export default ServiceCategory;
