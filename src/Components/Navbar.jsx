import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-black relative md:fixed md:right-0 h-18 top-0 left-0 border-b border-gray-400 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-slate-300 text-xl font-bold pl-4 m-1 md:m-6 lg:m-1" style={{fontFamily:"Merienda"}}> 
       <p className='text-sm md:text-xs lg:text-xl md:pr-4'>Navin Methani</p>
        </div>
       
        
        {/* Hamburger Icon */}
       <section className='flex mr-5 lg:hidden'>
       <div
           className="HAMBURGER-ICON space-y-2"
           onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-slate-300"></span>
            <span className="block h-0.5 w-8  bg-slate-300"></span>
            <span className="block h-0.5 w-8  bg-slate-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className=" my-8 uppercase">
                <Link to ="about" 
                 spy={true} 
                 smooth={true} 
                 offset={-100} 
                 className='cursor-pointer'>About</Link>
              </li>
              <li className="my-8 uppercase">
              <Link to="services"
             
              
             spy={true} 
      smooth={true} 
      offset={-100} 
      className='cursor-pointer'
           >
             Services
           </Link>
              </li>
              <li className="my-8 uppercase">
              <Link to="testimonials"
             
              
             spy={true} 
             smooth={true} 
             offset={-100} 
             className='cursor-pointer'
           >
             Testimonials
           </Link>
              </li>
              <li className="my-8 uppercase">
              <Link to="contact"
             
              
             spy={true} 
             smooth={true} 
             offset={200} 
             className='cursor-pointer'
           >
             Contact
           </Link>
              </li>
            </ul>
          </div>
       </section>
        {/* Links */}

        <div className="flex-col text-slate-300 space-x-10 hidden mt-4 md:flex md:flex-row md:mt-0">
        <Link to="hero"  spy={true} 
             smooth={true} 
             offset={-60} 
             className='cursor-pointer'>Home</Link>

                 <Link to="about"
             
             spy={true} 
             smooth={true} 
             offset={-60} 
             className='cursor-pointer'
            >
              About
            </Link>
            <Link to="services"
             
              
             spy={true} 
      smooth={true} 
      offset={-100} 
      className='cursor-pointer'
           >
             Services
           </Link>
           <Link to="testimonials"
             
              
             spy={true} 
             smooth={true} 
             offset={-100} 
             className='cursor-pointer'
           >
             Testimonials
           </Link>
           <Link to="contact"
             
              
             spy={true} 
             smooth={true} 
             offset={200} 
             className='cursor-pointer'
           >
             Contact
           </Link>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
};

export default Navbar;
