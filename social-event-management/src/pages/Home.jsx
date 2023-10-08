import React from 'react'
import Banner from '../component/Banner/Banner'
import Footer from '../component/Footer/Footer'
import { useLoaderData } from 'react-router-dom'
import ServiceDetails from '../component/ServiceDetails/ServiceDetails'
import ServiceCategory from '../component/ServiceCategory/ServiceCategory'

const Home = () => {

  const services = useLoaderData([]);
  //console.log(services);

  return (
    <div>
        <Banner></Banner>
        <div className='grid grid-cols-3'>
          {
            services?.map(service => <ServiceCategory
              key={service.id} service={service}
            ></ServiceCategory>)
          }
          
        </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Home