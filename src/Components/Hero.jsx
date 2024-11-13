import React from 'react';
import HomePageImg from '../assets/IMG_6725.PNG';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <section className='bg-black flex flex-col-reverse md:flex-row justify-center md:h-vh top-0' id="hero">

        <div className='flex flex-col flex-1 -mt-48 items-left justify-center lg:ml-10 lg:pl-24 space-y-6 lg:mt-0'>
            <h1 className="text-white text-5xl font-thin uppercase tracking-wider text-center lg:text-left lg:text-5xl lg:p-0" style={{fontFamily:"Funnel Display"}}>Your Home's Exclusive Personal Trainer</h1>
            <p className='text-slate-300 text-sm lg:text-xl font-mono font-thin text-lg text-center lg:text-left' style={{fontFamily:"Lexend Zetta"}}>High End Exercise Coaching</p>
            <br/>
            <Link className='mt-auto text-center self-start px-4 justify-self-end py-2 w-52 h-16 border border-slate-300 text-slate-50 hover:bg-slate-300 hover:text-black'
            to="contact"   
            spy={true} 
            smooth={true} 
            offset={200} 
    
            >Book Your Session Now
            
            </Link>   
        </div> 
{/* w-full h-full opacity-75 rounded-lg shadow-lg object-cover */}
        <div className='md:w-1/2 opacity-50'>
        <img
                className="w-full md:w-1/2 lg:w-full mx-auto"
                src={HomePageImg}
                alt="React Jobs"
              />
        </div>
      </section>
    </>
  )
}

export default Hero
