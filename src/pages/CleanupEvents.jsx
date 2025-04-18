import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CleanupEvents = () => {
  const [filter, setFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: 'River Cleanup',
      location: 'Mumbai, Maharastra',
      date: '2025-05-15',
      type: 'river',
      description: 'Join us for a day of cleaning up plastic waste from the River in Thane, Mumbai. Help protect local wildlife and make our waterways cleaner.',
      perks: ['Free T-shirt', 'Lunch provided', 'Certificate of participation'],
      image: 'https://www.americanrivers.org/wp-content/uploads/2019/02/NicoleCorey81-1-1024x683.jpg'
    },
    {
      id: 2,
      title: 'Beach Cleanup Initiative',
      location: 'Mumbai Beach, Maharastra',
      date: '2025-05-22',
      type: 'beach',
      description: 'Help us remove plastic debris from Mumbai Beach. This event focuses on protecting marine life and preserving our coastlines.',
      perks: ['Reusable water bottle', 'Snacks provided', '10% discount at local restaurants'],
      image: 'https://media.istockphoto.com/id/1179252601/photo/volunteer-man-collecting-trash-on-the-beach-ecology-concept.jpg?s=612x612&w=0&k=20&c=lTLA1bKOsRt8kIInpfNKgBZyVJWnlTXZ1Icn_erfDbk='
    },
    {
      id: 3,
      title: 'Urban Canal Restoration',
      location: 'Pune, Maharastra',
      date: '2025-06-01',
      type: 'canal',
      description: 'Clean up plastics and debris from Pune\'s historic canals. Help restore these beautiful waterways to their natural state.',
      perks: ['Eco-friendly goodie bag', 'Boat tour after cleanup', 'Local coffee shop vouchers'],
      image: 'https://nbi.iisd.org/wp-content/uploads/2024/07/kochi-india-canal-web-1024x683.jpg'
    },
    {
      id: 4,
      title: 'Sewage Outflow Monitoring',
      location: 'Chennai, Tamil Nadu',
      date: '2025-06-10',
      type: 'sewage',
      description: 'Technical cleanup and monitoring of sewage outflows to prevent plastic entering the ocean. Suitable for experienced volunteers.',
      perks: ['Professional certification', 'Protective gear provided', 'Networking lunch with environmental professionals'],
      image: 'https://t3.ftcdn.net/jpg/12/13/20/40/360_F_1213204001_kOrXj59YHsPOBDXADswzK0GqOUreq2mg.jpg'
    }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Cleanup Events</h1>
      
      <div className="flex justify-center mb-8">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 mx-1 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All Events
        </button>
        <button 
          onClick={() => setFilter('river')} 
          className={`px-4 py-2 mx-1 rounded ${filter === 'river' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          River Cleanups
        </button>
        <button 
          onClick={() => setFilter('beach')} 
          className={`px-4 py-2 mx-1 rounded ${filter === 'beach' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Beach Cleanups
        </button>
        <button 
          onClick={() => setFilter('canal')} 
          className={`px-4 py-2 mx-1 rounded ${filter === 'canal' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Canal Cleanups
        </button>
        <button 
          onClick={() => setFilter('sewage')} 
          className={`px-4 py-2 mx-1 rounded ${filter === 'sewage' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Sewage Systems
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-600 mb-4"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p className="mb-4">{event.description}</p>
              <div className="mb-4">
                <strong>Perks:</strong>
                <ul className="list-disc pl-5 mt-2">
                  {event.perks.map((perk, index) => (
                    <li key={index} className="text-gray-700">{perk}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/register/${event.id}`} className="block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Register for this Event
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanupEvents;