import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        const serviceCard = data.find((service) => service.id === parseInt(id));
        setService(serviceCard);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch service data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!service) return <div>Service not found</div>;

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <div className="relative mb-6">
          <h3 className="text-lg font-semibold mb-4">{service.eventType}</h3>
          <img
            src={service.eventImageURL}
            alt="event Image"
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/4"></div>
          <button className="absolute bottom-4 left-4 bg-slate-300 bg-opacity-75 text-black font-semibold p-2 rounded">
            Book For Your Event
          </button>
        </div>

        <p className="mb-6">{service.serviceDescription}</p>

        <div className="p-4 bg-blue-100 border-l-4 border-blue-500 rounded shadow-md mb-4">
          <h4 className="font-medium mb-2">Key Services:</h4>
          <ul className="list-disc pl-5">
            {service.keyServices.map((keyService, index) => (
              <li key={index}>{keyService}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded shadow-md">
          <h4 className="font-medium mb-2">Testimonials:</h4>
          <ul className="list-decimal pl-5">
            {service.testimonials.map((testimonial, index) => (
              <p key={index} className="italic mt-2">
                "{testimonial.content}""
                <span className="block text-right text-gray-600">
                  - {testimonial.author}
                </span>
              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
