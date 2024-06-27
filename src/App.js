import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Home />
      </div>
    </Router>
  );
};

export default App;
