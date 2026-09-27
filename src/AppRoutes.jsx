// frontend/src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page Components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import HowItWorksPage from './components/HowItWorksPage';
import PricingPage from './components/PricingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import HospitalPartnersPage from './components/HospitalPartnersPage'; // Added import

// Dashboard Components
import AdminDashboard from './components/admin/AdminDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import PatientDashboard from './components/patient/PatientDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/partners" element={<HospitalPartnersPage />} /> {/* Added route */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      
      {/* Protected Dashboard Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      
      {/* 404 Route */}
      <Route path="*" element={
        <div className="flex items-center justify-center h-[70vh] text-2xl font-bold text-gray-600">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;