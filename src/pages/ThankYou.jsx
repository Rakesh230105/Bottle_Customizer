import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You for Registering!</h1>
        <p className="text-xl mb-6">Your registration has been received and is being processed.</p>
        
        <div className="mb-8">
          <p className="mb-4">Here are your digital reward coupons:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-blue-500 p-4 rounded-md bg-blue-50">
              <h3 className="font-bold text-blue-700">25% OFF</h3>
              <p className="text-blue-600">Any purchase at EcoStore</p>
              <p className="text-sm mt-2">Code: CLEANUP25</p>
              <p className="text-xs mt-1">Valid until: Dec 31, 2025</p>
            </div>
            <div className="border-2 border-dashed border-green-500 p-4 rounded-md bg-green-50">
              <h3 className="font-bold text-green-700">FREE COFFEE</h3>
              <p className="text-green-600">At GreenBean Coffee</p>
              <p className="text-sm mt-2">Code: ECOCOFFEE</p>
              <p className="text-xs mt-1">Valid until: Aug 31, 2025</p>
            </div>
          </div>
        </div>
        
        <p className="mb-4">A confirmation email has been sent to your email address with all the details.</p>
        <p className="mb-8">We look forward to seeing you at the event!</p>
        
        <div className="flex justify-center space-x-4">
          <Link to="/" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Return Home
          </Link>
          <Link to="/events" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
            View More Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;