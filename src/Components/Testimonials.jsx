import React from 'react'

const Testimonials = () => {
  return (
   
      <section className='flex neumorphic h-[60vh] bg-gray-200 p-8 items-center' id='testimonials'>
      <div className='shrink flex flex-col grow-0 space-y-5  p-5 text-left'>
      <h1 className='text-4xl font-bold'>Testimonials</h1>
      <h2 className='text-3xl font-mono font-thin tracking-wide text-lg md:text-lef'>Hear What Navin's Client Says</h2>
      <p className="text-sm text-left">
    Welcome! I’m Navin Methani, a dedicated fitness trainer with over 5 years of experience helping clients reach their personal health goals. My approach is all about balance, ensuring that fitness routines are not just effective but also sustainable and enjoyable. Whether you're looking to build muscle, improve endurance, or lose weight, I'm here to support you with personalized workouts, nutritional advice, and motivation every step of the way. 
    </p>
    <button className='mt-auto self-start px-3  justify-self-end py-2 w-52 h-16 border border-black text-black hover:bg-black hover:text-white'>Discover Success Stories</button>   
    </div>
      <div class="flex items-center justify-center bg-gray-200 space-x-4">
  
  <div class="w-64 p-4 h-64  bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 1</h3>
    <p class="mt-2 text-gray-600">"Navin has transformed my fitness routine. I feel more energetic and motivated every day!"</p>
  </div>
  
 
  <div class="w-64 p-4 h-64 bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 2</h3>
    <p class="mt-2 text-gray-600">"Thanks to Navin’s guidance, I’ve reached my fitness goals faster than I thought possible."</p>
  </div>
  
 
  <div class="w-64 p-4 h-64 bg-gray-200 
              shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)]">
    <h3 class="text-lg font-semibold text-gray-800">Client 3</h3>
    <p class="mt-2 text-gray-600">"Navin’s workouts are challenging but effective. Highly recommended for anyone serious about fitness!"</p>
  </div>
</div>
</section>
  )
}

export default Testimonials
