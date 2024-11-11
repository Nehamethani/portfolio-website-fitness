import React from 'react'
import { Link } from 'react-scroll';

const style = {
  backgroundColor:'#262626',

}

const Navbar = () => {
    const NavLinkClass = ({ isActive }) => isActive ? 
    'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' ;

  return (
    <nav className="bg-gray-500 z-10 relative sticky h-20 top-0 left-0" style={style}>
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex flex-1 justify-around items-center  md:items-stretch md:justify-start"
          >

            <Link className=" cursor-pointer tracking-wider italic font-mono flex text-slate-300 flex-shrink-0 items-center md:ml-10" to="home" spy={true} 
             smooth={true} 
             offset={-60}>
             Navin
            </Link>

            <div className="mr-32 md:ml-auto">
              <div className="text-slate-300 flex space-x-10">

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
          </div>
        </div>
     
    </nav>
  )
}

export default Navbar
