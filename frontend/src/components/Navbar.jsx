import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    return (
        <>
            <header className="text-gray-400 bg-slate-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">PromoEngine</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/' className={`mr-5 px-1 hover:text-white hover:cursor-pointer ${location.pathname==='/'? 'text-blue-500': ''}`}>Home</Link>
                        <Link to='#' className={`mr-5 px-1 hover:text-white hover:cursor-pointer ${location.pathname==='/mynotes'? 'text-blue-500': ''}`}>About</Link>
                        <Link to='#' className={`mr-5 px-1 hover:text-white hover:cursor-pointer ${location.pathname==='/mynotes'? 'text-blue-500': ''}`}>Services</Link>
                        <Link to='#' className={`mr-5 px-1 hover:text-white hover:cursor-pointer ${location.pathname==='/mynotes'? 'text-blue-500': ''}`}>API</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        <Link to={`/merchantPortal`}>Merchant Portal</Link>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Navbar;
