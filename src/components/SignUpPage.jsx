// frontend/src/components/SignUpPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const SignUpPage = () => {
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Creating account...' });

    try {
      // Map 'name' to 'username' to match the Django backend requirement
      await api.post('/api/auth/register/', {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        role: role
      });

      setStatus({ type: 'success', message: 'Account created successfully! Redirecting to login...' });
      
      // Redirect to login page after 2 seconds
      setTimeout(() => navigate('/login'), 2000);

    } catch (error) {
      console.error("Registration failed:", error);
      // Extract specific error messages from Django (e.g., "Email already exists")
      const errorData = error.response?.data;
      const errorMsg = errorData?.email ? errorData.email[0] : 
                       errorData?.username ? errorData.username[0] : 
                       "Registration failed. Please try again.";
      setStatus({ type: 'error', message: errorMsg });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-100">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
          <p className="text-gray-500 text-sm mt-1">Join OneSmarter Health today</p>
        </div>

        {/* Role Selection Tabs */}
        <div className="flex bg-gray-100 rounded-md p-1 mb-6">
          <button
            type="button"
            onClick={() => { setRole('patient'); setStatus({ type: '', message: '' }); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${
              role === 'patient' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            I am a Patient
          </button>
          <button
            type="button"
            onClick={() => { setRole('doctor'); setStatus({ type: '', message: '' }); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${
              role === 'doctor' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            I am a Doctor
          </button>
        </div>

        {/* Status Messages */}
        {status.message && (
          <div className={`mb-4 p-3 rounded text-sm text-center font-medium border ${
            status.type === 'success' ? 'bg-green-100 text-green-700 border-green-200' :
            status.type === 'error' ? 'bg-red-100 text-red-700 border-red-200' :
            'bg-blue-100 text-blue-700 border-blue-200'
          }`}>
            {status.message}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">👤</span>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                placeholder="Dr. John Doe"
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">✉️</span>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                placeholder="email@example.com"
                required 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">🔒</span>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                placeholder="Create a secure password"
                minLength="8"
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status.type === 'loading' || status.type === 'success'}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors disabled:bg-red-400"
          >
            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-red-600 hover:underline font-semibold">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;