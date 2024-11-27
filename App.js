// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; // Home Page
import LoginPage from './pages/Login'; // Login Page
import SignupPage from './pages/Signup'; // Signup Page
import DashboardPage from './pages/DashboardPage'; // Dashboard Page (Employee Management)
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Login and Signup routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard page route */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
