import React from 'react';
import Cards from './Cards';

const Services = () => {
  return (
   <div className='flex flex-col space-y-4  p-6 pb-20 text-white' id='services'>
   <h1 className="text-xl uppercase font-thin text-center" style={{fontFamily:"Raleway"}}>Services</h1>
   <h2 className="text-white-300 text-3xl tracking-wide text-center" style={{fontFamily:"Funnel Display"}}>Bringing Elite Fitness To Your Doorstep</h2>
   <br/>
   <Cards/>
      </div>
  )
}

export default Services
