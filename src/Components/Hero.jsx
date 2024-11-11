import React from 'react';
import HomePageImg from '../assets/IMG_6725.PNG';

const Hero = () => {
  return (
    <>
      <section className='bg-black flex flex-col-reverse md:flex-row h-98 items-center justify-center' id="hero">

        <div className='flex flex-col flex-1 h-96 items-left ml-16 pl-14 pr-14 space-y-6 md:text-left md:ml-0 md:mr-0'>
            <h1 className="text-slate-300 text-5xl font-bold uppercase tracking-wider md:text-left">Your Home's Exclusive Personal Trainer</h1>
            <p className='text-slate-300 text-xl font-mono font-thin tracking-wider text-lg md:text-left'>High End Exercise Coaching</p>
            <br/>
            <button className='mt-auto self-start px-4  justify-self-end py-2 w-52 h-16 border border-slate-300 text-slate-50 hover:bg-slate-300 hover:text-black'>Book Your Session Now</button>   
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
