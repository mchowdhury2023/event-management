import React from 'react';
import servicesData from '../../../public/services.json';

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <div key={service.id} className="card bordered">
              <figure>
                <img src={service.eventImageURL} alt={service.eventType} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.eventType}</h2>
                <p>{service.serviceDescription}</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-accent">More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
