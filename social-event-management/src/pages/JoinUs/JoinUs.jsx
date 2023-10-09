// JoinUs.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';

const JoinUs = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
          Join Our Company
        </h2>
        
        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            At XYZ Company, our mission is to deliver exceptional services with passion and dedication.
            We're always on the lookout for individuals who resonate with our goals.
          </p>
        </div>

        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Why Join Us?</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Competitive salary and benefits</li>
            <li>Work in a dynamic and collaborative environment</li>
            <li>Opportunities for professional growth</li>
            <li>Engage in exciting projects</li>
          </ul>
        </div>

        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
          <p className="text-gray-700">
            We have positions open for developers, designers, and project managers. Reach out to know more!
          </p>
        </div>

        <div data-aos="fade-up" className="text-center">
          <a 
            href="#apply" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
