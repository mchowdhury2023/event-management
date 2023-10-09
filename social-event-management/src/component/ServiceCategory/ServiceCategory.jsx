import React from "react";
import { Link } from "react-router-dom";

const ServiceCategory = ({ service }) => {
  const { id, eventType, eventImageURL, serviceDescription } = service;

  return (
    <div className="p-4">
      <div className="card shadow-xl relative overflow-hidden h-96 w-full">
        {" "}
        {/* Set a fixed height with h-96 */}
        {/* Absolute positioned image to cover card */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={eventImageURL}
          alt="eventImage"
        />
        {/* Flexbox overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 bg-opacity-50 bg-black">
          {" "}
          {/* semi-transparent background */}
          <h2 className="card-title text-white">{eventType}</h2>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`}>
              <button className="btn bg-gray-500 text-black bg-opacity-50">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
