import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    experience: 'none',
    equipment: [],
    shirtSize: 'M',
    additionalInfo: '',
    termsAccepted: false
  });

  const equipmentOptions = [
    'Gloves',
    'Boots',
    'Trash picker',
    'Recycling bags',
    'First aid kit'
  ];
  
  const eventInfo = {
    1: {
      title: 'River Thames Cleanup',
      location: 'London, UK',
      date: '2025-05-15'
    },
    2: {
      title: 'Beach Cleanup Initiative',
      location: 'Miami Beach, FL',
      date: '2025-05-22'
    },
    3: {
      title: 'Urban Canal Restoration',
      location: 'Amsterdam, Netherlands',
      date: '2025-06-01'
    },
    4: {
      title: 'Sewage Outflow Monitoring',
      location: 'Sydney, Australia',
      date: '2025-06-10'
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'termsAccepted') {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Handle equipment checkboxes
        const updatedEquipment = [...formData.equipment];
        if (checked) {
          updatedEquipment.push(value);
        } else {
          const index = updatedEquipment.indexOf(value);
          if (index > -1) {
            updatedEquipment.splice(index, 1);
          }
        }
        setFormData({ ...formData, equipment: updatedEquipment });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    navigate('/thank-you');
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-2">Registration Form</h1>
      <h2 className="text-xl text-center mb-8">
        {eventInfo[eventId]?.title} - {eventInfo[eventId]?.location} - {new Date(eventInfo[eventId]?.date).toLocaleDateString()}
      </h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="city">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="state">
              State/Province *
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="zip">
              Postal Code *
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="experience">
            Previous Cleanup Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="none">No Experience</option>
            <option value="beginner">Beginner (1-2 events)</option>
            <option value="intermediate">Intermediate (3-5 events)</option>
            <option value="advanced">Advanced (6+ events)</option>
          </select>
        </div>
        
        <div className="mb-6">
          <p className="block text-gray-700 font-semibold mb-2">Equipment Needed (Check all that apply)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {equipmentOptions.map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name="equipment"
                  value={option}
                  checked={formData.equipment.includes(option)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="shirtSize">
            T-Shirt Size
          </label>
          <select
            id="shirtSize"
            name="shirtSize"
            value={formData.shirtSize}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="XS">Extra Small</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
            <option value="XXL">XX Large</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="additionalInfo">
            Additional Information or Special Requirements
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="termsAccepted">
              I agree to the terms and conditions and acknowledge the risks associated with cleanup activities *
            </label>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Your Participation Rewards</h3>
          <ul className="list-disc pl-5 text-blue-700">
            <li>Exclusive EcoClean T-shirt</li>
            <li>25% discount coupon for sustainable products</li>
            <li>Certificate of participation</li>
            <li>Free entry to our annual sustainability conference</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register for this Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;