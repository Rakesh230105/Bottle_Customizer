// src/pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Client logos (replace with actual paths when you have them)
  const clients = [
    { name: "Coca Cola", logo: "/coca-cola.png" },
    { name: "PepsiCo", logo: "/pepsico.png" },
    { name: "RC Cola", logo: "/rc-cola.png" },
  ];

  // Bottle sizes
  const bottleSizes = ["200ml", "250ml", "300ml", "330ml", "500ml", "1L"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-light-blue py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Custom Bottle Manufacturing
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We manufacture premium glass and PET bottles tailored to your exact requirements. 
              Only available for bulk orders.
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/customize" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:text-lg">
                Design Your Bottle
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Available Sizes Section */}
      <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Available Bottle Sizes
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
            variants={itemVariants}
          >
            {bottleSizes.map((size, index) => (
              <motion.div 
                key={index}
                className="p-4 bg-light-blue rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xl font-bold">{size}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Clients Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Our Trusted Clients
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            variants={itemVariants}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* Replace with actual images when available */}
                <div className="h-16 w-48 bg-white shadow rounded-lg flex items-center justify-center">
                  <p className="text-xl font-bold text-light-blue">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Manufacturing Facility Section */}
      <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Our Manufacturing Facilities
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <div className="bg-light-blue p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Machinery</h3>
              <p className="text-gray-600">
                Our facilities are equipped with the latest bottle manufacturing technology, 
                ensuring precision, quality, and efficiency in every production run.
                We utilize advanced blow molding machines, automated quality control systems,
                and energy-efficient processes.
              </p>
            </div>
            <div className="bg-light-blue p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Expansive Production Area</h3>
              <p className="text-gray-600">
                Spanning over 50,000 square feet, our manufacturing plant can handle 
                large-scale production demands while maintaining strict quality control.
                With multiple production lines running simultaneously, we can meet your 
                deadlines without compromising on quality.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-light-blue"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Ready to Create Your Custom Bottles?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you design the perfect bottle for your product.
          </p>
          <Link 
            to="/customize" 
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:text-lg"
          >
            Start Designing Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;