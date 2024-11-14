import React from 'react';
import HomePageImg from '../assets/IMG_6725.PNG';
import { Link } from 'react-scroll';
const style = {
  backgroundImage:`url(${HomePageImg})`,
  
}
const Hero = () => {
  return (
    <>
      <section className='min-h-[calc(100vh-8rem)] bg-black flex flex-col-reverse md:flex-row justify-center' id="hero">

        <div className='flex flex-col flex-1 -mt-96 items-left p-4 justify-center lg:ml-10 lg:pl-24 space-y-5  lg:mt-0'>
            <h1 className="text-white -mt-52 text-5xl uppercase tracking-wider text-center lg:text-left lg:text-5xl lg:p-0 lg:mt-0" style={{fontFamily:"Funnel Display"}}>Your Home's Exclusive Personal Trainer</h1>
            <p className='text-slate-300 text-xs lg:text-xl font-mono font-thin text-lg text-center lg:text-left' style={{fontFamily:"Lexend Zetta"}}>High End Exercise Coaching</p>
            <br/>
            <Link className='cursor-pointer text-center self-center lg:self-start p-4 text-sm lg:p-5 justify-self-end border border-slate-300 text-slate-50 hover:bg-slate-300 hover:text-black'
            style={{fontFamily:"Funnel Display"}}
            to="contact"   
            spy={true} 
            smooth={true} 
            offset={200} 
    
            >Book Your Session Now
            
            </Link>   
        </div> 
{/* w-full h-full opacity-75 rounded-lg shadow-lg object-cover */}
<div class="md:hidden min-h-vh bg-cover bg-center h-screen opacity-20" style={style}>
    
 
</div>
        <div className='hidden md:w-1/2 md:block'>
        <img
                className="w-full lg:opacity-100 md:w-1/2 lg:w-full mx-auto"
                src={HomePageImg}
                alt="React Jobs"
              />
        </div>

       
      </section>
    </>
  )
}

export default Hero
