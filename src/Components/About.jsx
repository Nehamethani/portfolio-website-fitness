import React from 'react';
import HomePageImg from '../assets/HomePageImg.png'

const style = {
  


}
const About = () => {

  return (
    <section className='flex items-center justify-center  mt-32 lg:mt-20 lg:pt-16 lg:pb-16 lg:p-10 w-auto bg-no-repeat bg-right bg-origin-border bg-auto' style={style} id='about'>
    <div className='flex flex-col  justify-center w-full space-y-5 p-4 h-auto lg:w-4/5 lg:h-3/4 text-white text-center lg:bg-gray-400 lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-xl lg:bg-opacity-20 p-0 lg:p-20'>
    <h1 className="text-xl uppercase font-thin text-center" style={{fontFamily:"Raleway"}}>About</h1>
    <h2 className="text-white-300 text-3xl tracking-wide md:text-lef" style={{fontFamily:"Funnel Display"}}>Meet Navin Methani, Your Elite Fitness Coach.</h2>
    
    <p className="text-xs lg:text-base text-white-400" style={{fontFamily:"Raleway"}}>
    Welcome! I’m Navin Methani, a dedicated fitness trainer with over 5 years of experience helping clients reach their personal health goals. My approach is all about balance, ensuring that fitness routines are not just effective but also sustainable and enjoyable. Whether you're looking to build muscle, improve endurance, or lose weight, I'm here to support you with personalized workouts, nutritional advice, and motivation every step of the way. 
    </p>
    

    <p className="text-sm text-white-400" style={{fontFamily:"Raleway"}}>
    Let’s work together to bring out your best self!
    </p>
   
</div>
    </section>
  )
}

export default About
