import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Theme.css';

import Home from './Components/Home/Home';
import Login from './Components/Auth/Login'; // Make sure this path is correct
import WorkInProgress from './Components/WorkInProgress'; // For 404 or coming soon

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<WorkInProgress />} />
      </Routes>
    </Router>
  );
};

export default App;karqfiyt67rq67airf5tyirft7r6tayrfi5yqtrae