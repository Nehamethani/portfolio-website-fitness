import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='flex flex-col border-t border-gray-700 space-y-6 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Link className="tracking-wider italic font-mono flex text-slate-300 flex-shrink-0 items-center md:ml-10" to="/">
                    Navin Methani
                </Link>
            </div>
            <div className='text-white text-center border-b-10 border-gray-700 space-x-10'>
                <Link to="/">Home</Link>
                <Link
                    smooth to={'/#about'}
                >
                    About
                </Link>
                <Link
                    smooth to={'/#about'}
                >
                    Services
                </Link>
                <Link
                    smooth to={'/#about'}
                >
                    Testimonials
                </Link>
                <Link
                    smooth to={'/#about'}
                >
                    Contact
                </Link>
            </div>
            <p className='text-white text-center border-t text-sm font-thin border-gray-500 w-96'>2024 Navin Methani All Rights Reserved.</p>
        </section>
    )
}

export default Footer
