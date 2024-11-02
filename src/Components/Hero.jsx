import React from 'react';
import HomePageImg from '../assets/HomePageImg.png';

const Hero = () => {
  return (
    <>
      <section className='bg-black flex flex-col-reverse md:flex-row h-[calc(100vh-4rem)] items-center justify-center'>

        <div className='flex flex-col flex-1 h-96 items-left place-content-center ml-16 pl-14 space-y-6 '>
            <h1 className="text-slate-300 text-5xl font-bold uppercase tracking-wider">Your Home's Exclusive Personal Trainer</h1>
            <p className='text-slate-300 text-xl font-mono font-thin tracking-wider text-lg'>High End Exercise Coaching</p>
            <br/>
            <button className='mt-auto self-start px-4  justify-self-end py-2 w-52 h-16 border border-slate-300 text-slate-50 hover:bg-slate-300 hover:text-black'>Book Your Session Now</button>   
        </div> 

        <div className='flex-1 pl-12 mr-16 pr-16 md:'>
        <img
                className="w-vw h-[calc(100vh-4rem)] w-auto"
                src={HomePageImg}
                alt="React Jobs"
              />
        </div>
      </section>
    </>
  )
}

export default Hero
