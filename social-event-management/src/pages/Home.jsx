import React, { useEffect } from "react";
import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import ServiceCategory from "../component/ServiceCategory/ServiceCategory";
import Navbar from "../component/Navbar/Navbar";
import Gallery from "../component/Gallery/Gallery";
import Testimony from "./Testimony/Testimony";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const services = useLoaderData([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-2xl bg-slate-200 font-semibold rounded-md mb-4 text-center">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCategory key={service.id} service={service}></ServiceCategory>
        ))}
      </div>

      <div className="mt-8 justify-center bg-slate-200">
        <h2 className="text-2xl font-semibold rounded-md mb-4 text-center">Gallery</h2>
        <Gallery />
      </div>
      <div className="mt-8">
        <Testimony></Testimony>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
