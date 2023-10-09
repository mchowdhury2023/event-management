import React from 'react'
import Banner from '../component/Banner/Banner'
import Footer from '../component/Footer/Footer'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from '../component/ServiceDetails/ServiceDetails'
import ServiceCategory from '../component/ServiceCategory/ServiceCategory'
import Navbar from '../component/Navbar/Navbar'
import Gallery from '../component/Gallery/Gallery'

const Home = () => {

  const services = useLoaderData([]);
  //console.log(services);

  return (
    <div>
        <Banner></Banner>
        <div>
          <h2 className='text-2xl bg-slate-200 font-semibold rounded-md mb-4'>Services</h2>
        </div>
        <div className='grid grid-cols-3'>
          {
            services?.map(service => <ServiceCategory
              key={service.id} service={service}
            ></ServiceCategory>)
          }
          
        </div>
        <div className="mt-8">
        <h2 className='text-2xl bg-slate-200 font-semibold rounded-md mb-4'>Gallery</h2>
        <Gallery />
      </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Home