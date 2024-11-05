import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const NavLinkClass = ({ isActive }) => isActive ? 
    'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' ;

  return (
    <nav className="bg-gray-500 z-10 relative ">
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex flex-1 justify-around items-center  md:items-stretch md:justify-start"
          >

            <Link className=" tracking-wider italic font-mono flex text-slate-300 flex-shrink-0 items-center md:ml-10" to="/">
             Navin Methani
            </Link>

            <div className="mr-32 md:ml-auto">
              <div className="flex space-x-2">

                 <Link to="/">Home</Link>

                 <Link
             
              
              smooth to={'/#about'}
            >
              About
            </Link>

            {/* <Link smooth to={'/page#focusable-heading'}>
              Focusable Heading
            </Link>


                <Link smooth to={'/page#focusable-heading'}>
              Focusable Heading
            </Link>
                
            <Link smooth to={'/page#focusable-heading'}>
              Focusable Heading
            </Link> */}
                
              </div>
            </div>
          </div>
        </div>
     
    </nav>
  )
}

export default Navbar
