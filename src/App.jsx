// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BottleCustomizer from './pages/BottleCustomizer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customize" element={<BottleCustomizer />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;