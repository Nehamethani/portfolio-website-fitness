import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-black text-white py-16 px-4 text-center h-[calc(100vh-11rem)]" id="contact">
      <div className='space-y-4'>
      <h1 className="text-xl uppercase font-thin text-center" style={{fontFamily:"Raleway"}}>Contact Me</h1>
      <h2 className="text-white-300 text-3xl tracking-wide md:text-lef" style={{fontFamily:"Funnel Display"}}>Get In Touch With Navin Methani</h2>
      <h6 className="mb-8">Let's Begin Your Fitness Journey Today</h6>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 border border-gray-500 text-white hover:bg-white hover:text-black transition duration-300 font-medium"
        >
          Send Message
        </button>
      </form>
      </div>
      
    </section>
  );
};

export default Contact;
