import React from 'react';

const style = {
  fontFamily:"Raleway",
  fontWeight: 500
}

const Testimonials = () => {
  return (
   
      <section className='flex neumorphic h-[60vh] bg-gray-200 p-8 items-center p-32' id='testimonials'>
      <div className='flex basis-1/2 flex-col grow-0 space-y-6 p-4 text-left'>
      <h1 className="text-xl uppercase font-thin text-left font-bold" style={style}>Testimonials</h1>
      <h2 className="text-white-300 text-3xl tracking-wide md:text-lef" style={{fontFamily:"Funnel Display"}}>Hear What Navin's Client Says</h2>
      <p className="text-sm text-left">
    Welcome! I’m Navin Methani, a dedicated fitness trainer with over 5 years of experience helping clients reach their personal health goals. My approach is all about balance, ensuring that fitness routines are not just effective but also sustainable and enjoyable. 
    </p>
    <button className='mt-auto self-start px-3  justify-self-end py-2 w-52 h-16 border border-black text-black hover:bg-black hover:text-white'>Discover Success Stories</button>   
    </div>
      <div class="flex items-center justify-center bg-gray-200 space-x-3 flex-end">
  
  <div class="w-56 p-4 h-64  bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 1</h3>
    <p class="mt-2 text-gray-600">"Navin has transformed my fitness routine. I feel more energetic and motivated every day!"</p>
  </div>
  
 
  <div class="w-56 p-4 h-64 bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 2</h3>
    <p class="mt-2 text-gray-600">"Thanks to Navin’s guidance, I’ve reached my fitness goals faster than I thought possible."</p>
  </div>
  
 
  <div class="w-56 p-4 h-64 bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 3</h3>
    <p class="mt-2 text-gray-600">"Navin’s workouts are challenging but effective. Highly recommended for anyone serious about fitness!"</p>
  </div>
</div>
</section>
  )
}

export default Testimonials
