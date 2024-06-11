import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import HeroSection from './Components/Home/Hero';
// import Header from './Components/Home/Header';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/hero" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
