// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-light-blue mb-4">BottleCraft</h3>
            <p className="text-gray-600">
              Premium bottle manufacturing for brands that demand excellence.
              Custom solutions for your packaging needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-light-blue mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-light-blue transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/customize" className="text-gray-600 hover:text-light-blue transition duration-300">
                  Design Your Bottle
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-light-blue mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>123 Bottle Street</p>
              <p>Manufacturing District</p>
              <p>Email: info@bottlecraft.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} BottleCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;