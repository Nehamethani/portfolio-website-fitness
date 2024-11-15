import React from 'react';
import HomePageImg from '../assets/HomePageImg.png'


const About = () => {

  return (
    <section className='flex items-center justify-center  w-auto bg-no-repeat bg-right bg-origin-border bg-auto' style={{backgroundImage:`url(${HomePageImg})`}} id='about'>
    <div className='flex flex-col  justify-center w-full h-auto lg:w-3/5 lg:h-3/4 text-white text-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 p-0 lg:p-20'>
    <h1 className="text-4xl font-bold text-center">About</h1>
    <h2 className="text-white-300 text-3xl font-mono font-thin tracking-wide text-lg md:text-lef">Meet Navin Methani, Your Elite Fitness Coach.</h2>
    <br/>
    <p className="text-lg text-white-400">
    Welcome! I’m Navin Methani, a dedicated fitness trainer with over 5 years of experience helping clients reach their personal health goals. My approach is all about balance, ensuring that fitness routines are not just effective but also sustainable and enjoyable. Whether you're looking to build muscle, improve endurance, or lose weight, I'm here to support you with personalized workouts, nutritional advice, and motivation every step of the way. 
    </p>
    <br/>
   
   <br/>
    <p className="text-lg text-white-400">
    Let’s work together to bring out your best self!
    </p>
   
</div>
    </section>
  )
}

export default About
