import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Theme.css';
import Home from './Components/Home/Home'
// import About from './About.jsx';
import './Theme.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;