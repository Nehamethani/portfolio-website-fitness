import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element }  from 'react-scroll';
const Navbar = () => {
    const ScrollLinkClass = ({ isActive }) => isActive ? 
    'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' ;

  return (
    <nav className="bg-gray-500 z-10 relative ">
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex flex-1 justify-around items-center  md:items-stretch md:justify-start"
          >

            <NavLink className=" tracking-wider italic font-mono flex text-slate-300 flex-shrink-0 items-center md:ml-10" to="/">
             Navin Methani
            </NavLink>
            <div className="mr-32 md:ml-auto">
              <div className="flex space-x-2">
                <ScrollLink
                  to="/"
                  className={ScrollLinkClass}
                  smooth={true} duration={500}
                
                  >Home</ScrollLink>
                  <ScrollLink
                  to='/about'
                  className={ScrollLinkClass}
                  smooth={true} duration={500}
                  >About</ScrollLink>
                  <ScrollLink
                  to="/services"
                  className={ScrollLinkClass}
                  smooth={true} duration={500}
                  >Services</ScrollLink>
                <ScrollLink
                  to="/testimonials"
                  className={ScrollLinkClass}
                  smooth={true} duration={500}
                  >Testimonials</ScrollLink>
                
                <ScrollLink
                  to="/contact"
                  className={ScrollLinkClass}
                  smooth={true} duration={500}
                  >Contact</ScrollLink>
                
              </div>
            </div>
          </div>
        </div>
     
    </nav>
  )
}

export default Navbar
