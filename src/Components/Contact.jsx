import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    

    const templateParams = {
      from_name : name,
      from_email: email,
      message: message,
      to_email: "nehamethani54@gmail.com",
      to_name: "Neha Methani"
    }
    const publicKey = "1uM7YzMS103TrTBty";
    const serviceId = "service_6kgu6w4";
    const templateId = "template_gsuykkj";

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setFormData({ name: '', email: '', message: '' });

  };

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
    
  };

  return (
    <section className="bg-black text-white py-16 px-4 text-center h-[calc(100vh-11rem)]" id="contact">
      <div className='space-y-4'>
      <h1 className="text-xl uppercase font-thin text-center" style={{fontFamily:"Raleway"}}>Contact Me</h1>
      <h2 className="text-white-300 text-3xl tracking-wide md:text-lef" style={{fontFamily:"Funnel Display"}}>Get In Touch With Navin Methani</h2>
      <h6 className="mb-8">Let's Begin Your Fitness Journey Today</h6>
      <form className="max-w-lg mx-auto" onSubmit={sendEmail}>
        <div className="mb-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            onChange={(e)=> setName(e.target.value)}
            className="w-full p-3 border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="from_email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            onChange={(e)=> setMessage(e.target.value)}
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
