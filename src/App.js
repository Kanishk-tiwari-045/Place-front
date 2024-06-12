import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import HeroSection from './pages/Hero';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/hero" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
