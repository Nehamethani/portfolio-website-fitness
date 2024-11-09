import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Testimonials from '../Components/Testimonials';
import Services from '../Components/Services';
import Contact from '../Components/Contact';

const HomePage = () => {
  return (
    <>
      
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default HomePage
