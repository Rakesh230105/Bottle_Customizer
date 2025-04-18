import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CleanupEvents from './pages/CleanupEvents';
import RegistrationForm from './pages/RegistrationForm';
import AboutUs from './pages/AboutUs';
import BottleCustomizer from './pages/BottleCustomizer';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<CleanupEvents />} />
            <Route path="/register/:eventId" element={<RegistrationForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/customize" element={<BottleCustomizer />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;