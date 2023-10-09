import React, { useState, useEffect } from 'react';
import servicesData from '../../../public/services.json';

const Testimony = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Extract one testimonial from each event type.
    const selectedTestimonials = servicesData.map(service => ({
      content: service.testimonials[0].content,
      author: service.testimonials[0].author,
      eventType: service.eventType
    }));
    setTestimonials(selectedTestimonials);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Testimony</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded shadow-lg border border-gray-200"
          >
            <h3 className="font-medium text-xl mb-4">{testimonial.eventType}</h3>
            <p className="italic mb-4">"{testimonial.content}"</p>
            <span className="block text-right text-gray-600">
              - {testimonial.author}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;
