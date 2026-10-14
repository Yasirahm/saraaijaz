import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppPopup from "./components/WhatsAppPopup";

/**
 * Main Application Component
 *
 * This starter template provides a clean, responsive single-page layout
 * designed for presenting website concepts to prospective clients.
 *
 * All section content can be customized directly within the respective
 * component files inside `src/components/`.
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Pricing Section */}
        <Pricing />

        {/* 5. Contact Section */}
        <Contact />
        <WhatsAppPopup />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
