import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 
    'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' ;

  return (
    <nav className="bg-gray-500 bg-opacity-50">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 justify-around items-center  md:items-stretch md:justify-start"
          >

            <NavLink className=" tracking-wider italic font-mono flex text-slate-300 flex-shrink-0 items-center ml-32" to="/">
             Navin Methani
            </NavLink>
            <div className="mr-32 md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink>
                  <NavLink
                  to="/about"
                  className={linkClass}
                  >About</NavLink>
                  <NavLink
                  to="/services"
                  className={linkClass}
                  >Services</NavLink>
                <NavLink
                  to="/testimonials"
                  className={linkClass}
                  >Testimonials</NavLink>
                
                <NavLink
                  to="/contact"
                  className={linkClass}
                  >Contact</NavLink>
                
              </div>
            </div>
          </div>
        </div>
     
    </nav>
  )
}

export default Navbar
