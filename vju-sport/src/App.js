import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import './pages/LandingPage/LandingPage.css';
import './pages/LoginPage/LoginPage.css';
import './pages/RegisterPage/RegisterPage.css';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
