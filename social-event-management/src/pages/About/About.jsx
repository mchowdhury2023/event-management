// About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10">
          About Us
        </h2>
        
        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700">
            Founded in 20XX, XYZ Company started as a small venture. Today, we're a leading name in our domain,
            driven by passion and the desire to make a difference.
          </p>
        </div>

        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Integrity in all endeavors</li>
            <li>Continuous improvement and innovation</li>
            <li>Commitment to community and environment</li>
            <li>Collaboration and teamwork</li>
          </ul>
        </div>

        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <p className="text-gray-700">
            Our team is a diverse group of individuals, each bringing unique strengths, but all driven by a common purpose – delivering excellence.
          </p>
        </div>

        <div data-aos="fade-up" className="text-center">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
