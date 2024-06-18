import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'
import './App.css';
import { SlideTabsExample } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<SlideTabsExample />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
