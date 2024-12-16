import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import './pages/LandingPage/LandingPage.css';
import './pages/LoginPage/LoginPage.css';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
