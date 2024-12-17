import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

import './pages/LandingPage/LandingPage.css';
import './pages/LoginPage/LoginPage.css';
import './pages/RegisterPage/RegisterPage.css';
import './pages/ProductListPage/ProductListPage.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/productslist" element={<ProductListPage />} />
      </Routes>
    </Router>
  );
}

export default App;