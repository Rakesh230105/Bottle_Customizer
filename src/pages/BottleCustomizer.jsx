// src/pages/BottleCustomizer.js
import React, { useState, useRef, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  OrbitControls, 
  PresentationControls, 
  Environment, 
  ContactShadows,
  useGLTF,
  Text,
  Html
} from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Bottle Component with more realistic rendering
const EnhancedBottle = ({ capColor, bodyColor, topPattern, middlePattern, bottomShape }) => {
  const group = useRef();
  
  // Use refs for each part of the bottle to animate or modify them
  const bodyRef = useRef();
  const neckRef = useRef();
  const capRef = useRef();
  const topPatternRef = useRef();
  const middlePatternRef = useRef();
  const bottomShapeRef = useRef();

  // Convert hex colors to Three.js colors
  const capMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(capColor),
    metalness: 0.2,
    roughness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 0.5,
  });

  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(bodyColor),
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.95, // Make it transparent like glass or plastic
    thickness: 0.5,     // Thickness for refraction
    envMapIntensity: 1, // Reflection intensity
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  // Rotate the bottle slightly for better effect
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime() * 0.15;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t) * 0.05,
        0.025
      );
    }
  });

  // Create bottle geometry with higher resolution for smoother curves
  return (
    <group ref={group} dispose={null}>
      {/* Main bottle body - cylindrical with curved bottom */}
      <mesh ref={bodyRef} position={[0, -0.5, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.8, 0.8, 3, 64, 64]} />
      </mesh>
      
      {/* Bottle shoulder - transitioning to neck */}
      <mesh position={[0, 1.2, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.8, 0.4, 0.5, 64, 8]} />
      </mesh>
      
      {/* Bottle neck */}
      <mesh ref={neckRef} position={[0, 1.7, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 64, 4]} />
      </mesh>
      
      {/* Thread for cap */}
      <mesh position={[0, 2.05, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.42, 0.38, 0.2, 64, 3]} />
      </mesh>
      
      {/* Bottle cap */}
      <mesh ref={capRef} position={[0, 2.25, 0]} material={capMaterial}>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 64, 4]} />
        {/* Cap ridges for grip */}
        <cylinderGeometry args={[0.46, 0.46, 0.25, 32, 1, true]} />
      </mesh>

      {/* Top pattern - conditionally rendered based on selection */}
      {topPattern === 'grip1' && (
        <mesh ref={topPatternRef} position={[0, 1, 0]} material={bodyMaterial}>
          <torusGeometry args={[0.81, 0.05, 8, 32]} />
          <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, 0.15, 0]} />
          <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, -0.15, 0]} />
        </mesh>
      )}

      {topPattern === 'grip2' && (
        <group ref={topPatternRef} position={[0, 1, 0]}>
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

      {/* Middle patterns - conditionally rendered based on selection */}
      {middlePattern === 'ovals' && (
        <group ref={middlePatternRef} position={[0, 0, 0]}>
          {Array(6).fill().map((_, i) => (
            <mesh 
              key={i} 
              position={[0, 0, 0]} 
              rotation={[0, i * Math.PI / 3, 0]} 
              material={bodyMaterial}
            >
              <cylinderGeometry args={[0.81, 0.81, 1.5, 32, 1, true]} />
              <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, 0.75, 0]} rotation={[Math.PI/2, 0, 0]} />
              <torusGeometry args={[0.81, 0.05, 8, 32]} position={[0, -0.75, 0]} rotation={[Math.PI/2, 0, 0]} />
            </mesh>
          ))}
        </group>
      )}

      {middlePattern === 'rectangles' && (
        <group ref={middlePatternRef} position={[0, 0, 0]}>
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
        <group ref={bottomShapeRef} position={[0, -2, 0]}>
          <mesh material={bodyMaterial}>
            <cylinderGeometry args={[0.8, 0.6, 0.2, 5, 1]} />
          </mesh>
          <mesh position={[0, -0.15, 0]} material={bodyMaterial}>
            <cylinderGeometry args={[0.6, 0.3, 0.1, 5, 1]} />
          </mesh>
        </group>
      )}

      {bottomShape === 'flower' && (
        <group ref={bottomShapeRef} position={[0, -2, 0]}>
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

      {/* Add reflection plane below - makes it look like bottle is sitting on glass surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          roughness={0}
          metalness={0}
          reflectivity={0.5}
          clearcoat={1}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

// Loading indicator component
const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-500 font-semibold">Loading 3D Model...</p>
      </div>
    </Html>
  );
};

const BottleCustomizer = () => {
  // State for customization options
  const [activeSection, setActiveSection] = useState('cap');
  const [capColor, setCapColor] = useState('#ff0000');
  const [bodyColor, setBodyColor] = useState('#87CEEB');
  const [topPattern, setTopPattern] = useState(null);
  const [middlePattern, setMiddlePattern] = useState(null);
  const [bottomShape, setBottomShape] = useState(null);
  
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    requirements: ''
  });

  // Available colors with better gradients for realistic rendering
  const capColors = [
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff', // Cyan
    '#000000', // Black
    '#ffffff', // White
  ];
  
  const bodyColors = [
    '#87CEEB', // Sky Blue
    '#98FB98', // Pale Green
    '#FFA07A', // Light Salmon
    '#E6E6FA', // Lavender
    '#FFDAB9', // Peach
    '#B0C4DE', // Light Steel Blue
    '#F5F5F5', // White Smoke
    '#D3D3D3', // Light Gray
  ];

  // Top patterns
  const topPatterns = [
    { id: 'grip1', name: 'Circular Grip' },
    { id: 'grip2', name: 'Diamond Grip' },
    { id: 'grip3', name: 'Smooth' },
  ];

  // Middle patterns
  const middlePatterns = [
    { id: 'ovals', name: 'Oval Pattern' },
    { id: 'rectangles', name: 'Rectangle Pattern' },
    { id: 'smooth', name: 'Smooth' },
  ];

  // Bottom shapes
  const bottomShapes = [
    { id: 'star', name: 'Star Base' },
    { id: 'flower', name: 'Flower Base' },
    { id: 'standard', name: 'Standard Base' },
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleRequestQuote = () => {
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

  // Animation variants
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
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Customize Your Bottle
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced 3D Bottle Preview */}
          <motion.div 
            className="bg-light-blue rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Bottle Preview</h2>
            <div className="h-96 bg-gradient-to-b from-white to-light-blue rounded-lg">
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]} // Improve resolution
                shadows
              >
                {/* Improved lighting */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                
                {/* Better controls */}
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
                    />
                    
                    {/* Add simulated environment reflections */}
                    <Environment preset="studio" />
                    
                    {/* Add subtle shadow beneath the bottle */}
                    <ContactShadows 
                      position={[0, -2.2, 0]} 
                      opacity={0.3} 
                      scale={10} 
                      blur={2}
                      far={10}
                    />
                  </Suspense>
                </PresentationControls>
                
                {/* Enable zooming with limits */}
                <OrbitControls 
                  enableZoom={true} 
                  minDistance={3} 
                  maxDistance={8}
                  enablePan={false}
                />
              </Canvas>
              
              {/* Instruction overlay */}
              <div className="mt-2 text-center text-sm text-gray-500">
                Click and drag to rotate • Scroll to zoom
              </div>
            </div>
            
            {/* Show active selection */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Customizing: <span className="font-semibold text-blue-500 capitalize">{activeSection}</span>
              </p>
            </div>
          </motion.div>
          
          {/* Customization Options */}
          <motion.div 
            className="bg-light-blue rounded-lg shadow-lg p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-semibold text-center mb-6"
              variants={itemVariants}
            >
              Customization Options
            </motion.h2>
            
            {/* Section Tabs */}
            <motion.div 
              className="flex mb-6 border-b"
              variants={itemVariants}
            >
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'cap' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('cap')}
              >
                Cap
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'body' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('body')}
              >
                Body
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'top' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('top')}
              >
                Top Part
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'middle' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('middle')}
              >
                Middle
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeSection === 'bottom' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => handleSectionChange('bottom')}
              >
                Bottom
              </button>
            </motion.div>
            
            {/* Options based on selected section */}
            <motion.div variants={itemVariants} className="mb-8">
              {activeSection === 'cap' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Cap Color</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {capColors.map((color) => (
                      <button
                        key={color}
                        className={`h-12 w-full rounded-full ${capColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                        style={{ 
                          backgroundColor: color,
                          backgroundImage: `linear-gradient(135deg, ${color} 60%, ${adjustBrightness(color, 30)} 100%)` 
                        }}
                        onClick={() => setCapColor(color)}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'body' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Bottle Color</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {bodyColors.map((color) => (
                      <button
                        key={color}
                        className={`h-12 w-full rounded-full ${bodyColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                        style={{ 
                          backgroundColor: color,
                          backgroundImage: `linear-gradient(135deg, ${adjustBrightness(color, 20)} 0%, ${color} 50%, ${adjustBrightness(color, -20)} 100%)`
                        }}
                        onClick={() => setBodyColor(color)}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {activeSection === 'top' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Top Pattern</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {topPatterns.map((pattern) => (
                      <button
                        key={pattern.id}
                        className={`p-4 border rounded-lg ${topPattern === pattern.id ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
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
                  <h3 className="text-lg font-medium mb-4">Select Middle Pattern</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {middlePatterns.map((pattern) => (
                      <button
                        key={pattern.id}
                        className={`p-4 border rounded-lg ${middlePattern === pattern.id ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
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
                  <h3 className="text-lg font-medium mb-4">Select Bottom Shape</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {bottomShapes.map((shape) => (
                      <button
                        key={shape.id}
                        className={`p-4 border rounded-lg ${bottomShape === shape.id ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
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
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
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
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your quote request has been submitted. Our team will contact you shortly.
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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

// Helper function to adjust color brightness
function adjustBrightness(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  R = (R > 0) ? R : 0;
  G = (G > 0) ? G : 0;
  B = (B > 0) ? B : 0;

  const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
  const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
  const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

export default BottleCustomizer;