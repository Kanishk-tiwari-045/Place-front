import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Signup from './Signup';
import { motion } from 'framer-motion';

const Home = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  return (
    <div className="home-page">
      {/* Navbar Component */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onSigninClick={toggleSignup} />

      <main>
        {/* Hero Section */}
        <section id="home" className="section">
          <Hero />
        </section>

        {/* Features Section */}
        <section className="section">
          <Features />
        </section>
      </main>

      {/* Signup Modal */}
      {isSignupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleSignup}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Signup />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
