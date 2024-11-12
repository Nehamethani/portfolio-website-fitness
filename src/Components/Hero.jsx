import React from 'react';
import HomePageImg from '../assets/IMG_6725.PNG';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <section className='bg-black flex flex-col-reverse md:flex-row h-[calc(100vh-4rem)] items-center justify-center' id="hero">

        <div className='flex flex-col flex-1 h-96 items-left justify-center text-center ml-10 pl-24 space-y-6 md:text-left md:ml-0 md:mr-0'>
            <h1 className="text-slate-300 text-5xl font-thin uppercase tracking-wider md:text-left" style={{fontFamily:"Funnel Display"}}>Your Home's Exclusive Personal Trainer</h1>
            <p className='text-slate-300 text-xl font-mono font-thin text-lg md:text-left' style={{fontFamily:"Lexend Zetta"}}>High End Exercise Coaching</p>
            <br/>
            <Link className='mt-auto text-center self-start px-4  justify-self-end py-2 w-52 h-16 border border-slate-300 text-slate-50 hover:bg-slate-300 hover:text-black'
            to="contact"   
            spy={true} 
            smooth={true} 
            offset={200} 
    
            >Book Your Session Now
            
            </Link>   
        </div> 

        <div className='h-[calc(100vh-4rem)] md:w-1/2'>
        <img
                className="w-full h-full opacity-75 rounded-lg shadow-lg object-cover"
                src={HomePageImg}
                alt="React Jobs"
              />
        </div>
      </section>
    </>
  )
}

export default Hero
