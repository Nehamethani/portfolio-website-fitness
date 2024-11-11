import React from 'react';
import Cards from './Cards';

const Services = () => {
  return (
   <div className='flex flex-col space-y-4 mb-20 ' id='services'>
   <h1 className='text-4xl font-bold text-center text-white'>Services</h1>
   <h2 className='text-white text-center text-3xl font-mono font-thin tracking-wide text-lg md:text-lef'>Bringing Elite Fitness To Your Doorstep</h2>
   <br/>
   <Cards/>
      </div>
  )
}

export default Services
