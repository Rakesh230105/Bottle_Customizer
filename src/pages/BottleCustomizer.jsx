// src/pages/BottleCustomizer.js
import React, { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PresentationControls, 
  Environment, 
  ContactShadows,
  Html
} from '@react-three/drei';
import * as THREE from 'three';

const EnhancedBottle = ({ capColor, bodyColor, topPattern, middlePattern, bottomShape, size }) => {
  const group = useRef();
  
  // Scale based on selected size
  const sizeScale = {
    '200ml': 0.8,
    '300ml': 1.0,
    '500ml': 1.2,
    '1000ml': 1.5
  }[size] || 1.0;

  const capMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(capColor),
    metalness: 0.2,
    roughness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(bodyColor),
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.95,
    thickness: 0.5,
    envMapIntensity: 1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  // Fixed rotation issue - properly implementing useFrame
  useFrame((state) => {
    if (group.current) {
      // Using smooth auto-rotation that doesn't depend on the animation loop timing
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group} scale={[sizeScale, sizeScale, sizeScale]} dispose={null}>
      {/* Main bottle body */}
      <mesh position={[0, -0.5, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.8, 0.8, 3, 64]} />
      </mesh>
      
      {/* Bottle shoulder */}
      <mesh position={[0, 1.2, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.8, 0.4, 0.5, 64]} />
      </mesh>
      
      {/* Bottle neck */}
      <mesh position={[0, 1.7, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 64]} />
      </mesh>
      
      {/* Thread for cap */}
      <mesh position={[0, 2.05, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.42, 0.38, 0.2, 64]} />
      </mesh>
      
      {/* Bottle cap */}
      <mesh position={[0, 2.25, 0]} material={capMaterial}>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 64]} />
      </mesh>

      {/* Top patterns */}
      {topPattern === 'grip1' && (
        <mesh position={[0, 1, 0]} material={bodyMaterial}>
          <torusGeometry args={[0.81, 0.05, 8, 32]} />
          <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, 0.15, 0]} />
          <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, -0.15, 0]} />
        </mesh>
      )}

      {topPattern === 'grip2' && (
        <group position={[0, 1, 0]}>
          {Array(12).fill().map((_, i) => (
            <mesh 
              key={i} 
              position={[
                0.78 * Math.cos(i * Math.PI / 6), 
                0, 
                0.78 * Math.sin(i * Math.PI / 6)
              ]} 
              material={bodyMaterial}
            >
              <boxGeometry args={[0.1, 0.5, 0.1]} />
            </mesh>
          ))}
        </group>
      )}

      {/* Middle patterns */}
      {middlePattern === 'ovals' && (
        <group position={[0, 0, 0]}>
          {Array(6).fill().map((_, i) => (
            <mesh 
              key={i} 
              position={[0, 0, 0]} 
              rotation={[0, i * Math.PI / 3, 0]} 
              material={bodyMaterial}
            >
              <cylinderGeometry args={[0.81, 0.81, 1.5, 32, 1, true]} />
            </mesh>
          ))}
        </group>
      )}

      {middlePattern === 'rectangles' && (
        <group position={[0, 0, 0]}>
          {Array(6).fill().map((_, i) => (
            <mesh 
              key={i} 
              position={[0, 0, 0]} 
              rotation={[0, i * Math.PI / 3, 0]} 
              material={bodyMaterial}
            >
              <boxGeometry args={[0.05, 1.5, 0.4]} position={[0.8, 0, 0]} />
            </mesh>
          ))}
        </group>
      )}

      {/* Bottom shapes */}
      {bottomShape === 'star' && (
        <group position={[0, -2, 0]}>
          <mesh material={bodyMaterial}>
            <cylinderGeometry args={[0.8, 0.6, 0.2, 5, 1]} />
          </mesh>
        </group>
      )}

      {bottomShape === 'flower' && (
        <group position={[0, -2, 0]}>
          {Array(6).fill().map((_, i) => (
            <mesh 
              key={i} 
              rotation={[0, i * Math.PI / 3, 0]} 
              material={bodyMaterial}
            >
              <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} position={[0.6, 0, 0]} />
            </mesh>
          ))}
          <mesh material={bodyMaterial}>
            <cylinderGeometry args={[0.8, 0.6, 0.2, 32, 1]} />
          </mesh>
        </group>
      )}

      {/* Reflection plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 font-semibold">Loading 3D Model...</p>
      </div>
    </Html>
  );
};

const BottleCustomizer = () => {
  const [activeSection, setActiveSection] = useState('size');
  const [capColor, setCapColor] = useState('#000000');
  const [bodyColor, setBodyColor] = useState('#ffffff');
  const [topPattern, setTopPattern] = useState(null);
  const [middlePattern, setMiddlePattern] = useState(null);
  const [bottomShape, setBottomShape] = useState(null);
  const [size, setSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    requirements: ''
  });

  // Enhanced color palette with at least 12 colors for both cap and body
  const capColors = [
    '#000000', // Black
    '#ffffff', // White
    '#e63946', // Red
    '#0077b6', // Blue
    '#2a9d8f', // Teal
    '#e9c46a', // Yellow
    '#f4a261', // Orange
    '#6a0dad', // Purple
    '#1da856', // Green
    '#ff69b4', // Hot Pink
    '#a0522d', // Brown
    '#c0c0c0', // Silver
    '#ffd700', // Gold
    '#00ffff', // Cyan
    '#808080', // Gray
  ];
  
  const bodyColors = [
    '#ffffff', // White
    '#000000', // Black
    '#e63946', // Red
    '#0077b6', // Blue
    '#2a9d8f', // Teal
    '#e9c46a', // Yellow
    '#f4a261', // Orange
    '#6a0dad', // Purple
    '#1da856', // Green
    '#ff69b4', // Hot Pink
    '#a0522d', // Brown
    '#c0c0c0', // Silver
    '#ffd700', // Gold
    '#00ffff', // Cyan
    '#808080', // Gray
  ];

  // Color name mapping for display
  const colorNames = {
    '#000000': 'Black',
    '#ffffff': 'White',
    '#e63946': 'Red',
    '#0077b6': 'Blue',
    '#2a9d8f': 'Teal',
    '#e9c46a': 'Yellow',
    '#f4a261': 'Orange',
    '#6a0dad': 'Purple',
    '#1da856': 'Green',
    '#ff69b4': 'Hot Pink',
    '#a0522d': 'Brown',
    '#c0c0c0': 'Silver',
    '#ffd700': 'Gold',
    '#00ffff': 'Cyan',
    '#808080': 'Gray',
  };
  
  // Size options
  const sizes = [
    { id: '200ml', name: '200ml' },
    { id: '300ml', name: '300ml' },
    { id: '500ml', name: '500ml' },
    { id: '1000ml', name: '1000ml' }
  ];

  const topPatterns = [
    { id: 'grip1', name: 'Circular Grip' },
    { id: 'grip2', name: 'Diamond Grip' },
    { id: 'grip3', name: 'Smooth' },
  ];

  const middlePatterns = [
    { id: 'ovals', name: 'Oval Pattern' },
    { id: 'rectangles', name: 'Rectangle Pattern' },
    { id: 'smooth', name: 'Smooth' },
  ];

  const bottomShapes = [
    { id: 'star', name: 'Star Base' },
    { id: 'flower', name: 'Flower Base' },
    { id: 'standard', name: 'Standard Base' },
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleRequestQuote = () => {
    if (!size) {
      alert('Please select a bottle size first');
      setActiveSection('size');
      return;
    }
    setShowModal(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowModal(false);
    setConfirmationModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
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

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Customize Your Bottle
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Bottle Preview */}
          <motion.div 
            className="bg-gray-100 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Bottle Preview</h2>
            {!size ? (
              <div className="h-96 flex items-center justify-center bg-gray-200 rounded-lg">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4 text-gray-700">Please select a bottle size to begin</h3>
                  <button
                    onClick={() => setActiveSection('size')}
                    className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Select Size
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="h-96 bg-gray-200 rounded-lg">
                  <Canvas 
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    dpr={[1, 2]}
                    shadows
                  >
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    
                    <PresentationControls
                      global
                      rotation={[0, -Math.PI / 4, 0]}
                      polar={[-Math.PI / 4, Math.PI / 4]}
                      azimuth={[-Math.PI / 4, Math.PI / 4]}
                      config={{ mass: 2, tension: 400 }}
                      snap={{ mass: 4, tension: 250 }}
                    >
                      <Suspense fallback={<Loader />}>
                        <EnhancedBottle 
                          capColor={capColor}
                          bodyColor={bodyColor}
                          topPattern={topPattern} 
                          middlePattern={middlePattern}
                          bottomShape={bottomShape}
                          size={size}
                        />
                        <Environment preset="studio" />
                        <ContactShadows 
                          position={[0, -2.2, 0]} 
                          opacity={0.3} 
                          scale={10} 
                          blur={2}
                          far={10}
                        />
                      </Suspense>
                    </PresentationControls>
                    <OrbitControls 
                      enableZoom={true} 
                      minDistance={3} 
                      maxDistance={8}
                      enablePan={false}
                    />
                  </Canvas>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600">
                    Size: <span className="font-semibold text-gray-800">{size}</span>
                  </p>
                  <p className="text-gray-600">
                    Cap Color: <span className="font-semibold text-gray-800">{colorNames[capColor]}</span>
                  </p>
                  <p className="text-gray-600">
                    Body Color: <span className="font-semibold text-gray-800">{colorNames[bodyColor]}</span>
                  </p>
                </div>
              </>
            )}
          </motion.div>
          
          {/* Customization Options */}
          <motion.div 
            className="bg-gray-100 rounded-lg shadow-lg p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-semibold text-center mb-6 text-gray-800"
              variants={itemVariants}
            >
              Customization Options
            </motion.h2>
            
            {/* Section Tabs */}
            <motion.div 
              className="flex mb-6 border-b border-gray-300 flex-wrap"
              variants={itemVariants}
            >
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'size' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('size')}
              >
                Size
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'cap' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('cap')}
              >
                Cap
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'body' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('body')}
              >
                Body
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'top' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('top')}
              >
                Top
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'middle' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('middle')}
              >
                Middle
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'bottom' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('bottom')}
              >
                Bottom
              </button>
            </motion.div>
            
            {/* Options based on selected section */}
            <motion.div variants={itemVariants} className="mb-8">
              {activeSection === 'size' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Bottle Size</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {sizes.map((sizeOption) => (
                      <button
                        key={sizeOption.id}
                        className={`p-4 border rounded-lg ${size === sizeOption.id ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        onClick={() => setSize(sizeOption.id)}
                      >
                        {sizeOption.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'cap' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Cap Color</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {capColors.map((color) => (
                      <div key={color} className="text-center">
                        <button
                          className={`h-12 w-12 rounded-full mx-auto mb-1 ${capColor === color ? 'ring-2 ring-gray-800 ring-offset-2' : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setCapColor(color)}
                          title={colorNames[color]}
                        />
                        <span className="text-xs text-gray-600">{colorNames[color]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'body' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Bottle Color</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {bodyColors.map((color) => (
                      <div key={color} className="text-center">
                        <button
                          className={`h-12 w-12 rounded-full mx-auto mb-1 ${bodyColor === color ? 'ring-2 ring-gray-800 ring-offset-2' : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setBodyColor(color)}
                          title={colorNames[color]}
                        />
                        <span className="text-xs text-gray-600">{colorNames[color]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'top' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Top Pattern</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {topPatterns.map((pattern) => (
                      <button
                        key={pattern.id}
                        className={`p-4 border rounded-lg ${topPattern === pattern.id ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        onClick={() => setTopPattern(pattern.id)}
                      >
                        {pattern.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'middle' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Middle Pattern</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {middlePatterns.map((pattern) => (
                      <button
                        key={pattern.id}
                        className={`p-4 border rounded-lg ${middlePattern === pattern.id ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        onClick={() => setMiddlePattern(pattern.id)}
                      >
                        {pattern.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'bottom' && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Select Bottom Shape</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {bottomShapes.map((shape) => (
                      <button
                        key={shape.id}
                        className={`p-4 border rounded-lg ${bottomShape === shape.id ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                        onClick={() => setBottomShape(shape.id)}
                      >
                        {shape.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            {/* Request Quote Button */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <button
                className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition-colors"
                onClick={handleRequestQuote}
              >
                Request a Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Quote Request Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Request a Quote</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="requirements">
                  Additional Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-100"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                  Confirm
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      
      {/* Confirmation Modal */}
      {confirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your quote request has been submitted. Our team will contact you shortly.
            </p>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              onClick={() => setConfirmationModal(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BottleCustomizer;