import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CFF4FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              BottleCraft
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#CFF4FB] transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#CFF4FB] transition duration-300">
              About Us
            </Link>
            <Link to="/customize" className="text-gray-700 hover:text-[#CFF4FB] transition duration-300">
              Design Your Bottle
            </Link>
            <button className="bg-[#CFF4FB] text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
              Sign In
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#CFF4FB] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white pb-4"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#CFF4FB] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#CFF4FB] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/customize" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#CFF4FB] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Design Your Bottle
            </Link>
            <div className="mt-3 px-3">
              <button className="w-full bg-[#CFF4FB] text-gray-800 px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
                Sign In
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;