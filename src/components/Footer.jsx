import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#CFF4FB]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4 border-b-2 border-black pb-2">BottleCraft</h3>
            <p className="text-black">
              Premium bottle manufacturing for brands that demand excellence.
              Custom solutions for your packaging needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-black mb-4 border-b-2 border-black pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-gray-800 hover:underline transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/customize" className="text-black hover:text-gray-800 hover:underline transition duration-300">
                  Design Your Bottle
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:text-gray-800 hover:underline transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-gray-800 hover:underline transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-black mb-4 border-b-2 border-black pb-2">Contact Us</h3>
            <address className="not-italic text-black">
              <p>Autonagar</p>
              <p>Steel Plant Road</p>
              <p>Email: <a href="mailto:customize@bottles.com" className="hover:underline">customize@bottles.com</a></p>
              <p>Phone: <a href="tel:+919848254165" className="hover:underline">+91 9848254165</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-black">
          <p className="text-center text-black">
            &copy; {new Date().getFullYear()} BottleCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;