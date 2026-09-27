// frontend/src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; 

const LoginPage = () => {
  const [loginType, setLoginType] = useState('patient');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  
  // 2FA State Variables
  const [mfaStep, setMfaStep] = useState('login'); // 'login', 'setup', 'verify'
  const [challengeId, setChallengeId] = useState('');
  const [qrImage, setQrImage] = useState('');
  const [mfaCode, setMfaCode] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); 

    try {
      const response = await api.post('/api/auth/login/', { 
        email: credentials.email,
        password: credentials.password,
        role: loginType 
      });
      
      // If access token is provided immediately (Patients/Doctors)
      if (response.data.access) {
        finishLogin(response.data);
      } 
      // If Admin needs to setup 2FA for the first time
      else if (response.data.status === 'setup_required') {
        setChallengeId(response.data.challenge_id);
        fetchQrCode(response.data.challenge_id);
      } 
      // If Admin already has 2FA and needs to verify
      else if (response.data.status === 'mfa_required') {
        setChallengeId(response.data.challenge_id);
        setMfaStep('verify');
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMsg(error.response?.data?.error || error.response?.data?.detail || "Invalid credentials.");
    }
  };

  const fetchQrCode = async (cid) => {
    try {
      const response = await api.post('/api/auth/setup-2fa/', { challenge_id: cid });
      setQrImage(response.data.qr_image);
      setMfaStep('setup');
    } catch (error) {
      setErrorMsg("Failed to generate 2FA QR code.");
    }
  };

  const handleMfaSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const response = await api.post('/api/auth/verify-2fa/', {
        challenge_id: challengeId,
        code: mfaCode
      });
      finishLogin(response.data);
    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Invalid 2FA code.");
    }
  };

  const finishLogin = (data) => {
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    
    const userRole = data.user.role;
    if (userRole === 'admin') navigate('/admin-dashboard');
    else if (userRole === 'doctor') navigate('/doctor-dashboard');
    else if (userRole === 'patient') navigate('/patient-dashboard');
  };

  const resetLogin = () => {
    setMfaStep('login');
    setMfaCode('');
    setChallengeId('');
    setErrorMsg('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-100">
        
        {/* Step 1: Standard Login Form */}
        {mfaStep === 'login' && (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-500 text-sm mt-1">Please select your portal to log in</p>
            </div>

            <div className="flex bg-gray-100 rounded-md p-1 mb-6">
              {['patient', 'doctor', 'admin'].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => { setLoginType(role); setErrorMsg(''); }}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors capitalize ${
                    loginType === role ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded text-sm text-center font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">✉️</span>
                  <input 
                    type="email" 
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                    placeholder="Enter your email"
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
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full pl-10 p-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                    placeholder="••••••••"
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#1a3636] hover:bg-[#122626] text-white font-bold py-3 rounded transition-colors capitalize">
                Login as {loginType}
              </button>
            </form>
          </>
        )}

        {/* Step 2: 2FA Setup or Verification for Admins */}
        {(mfaStep === 'setup' || mfaStep === 'verify') && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Security</h2>
            
            {mfaStep === 'setup' ? (
              <p className="text-gray-600 text-sm mb-4">
                Scan this QR code with Google Authenticator or Authy to set up your 2FA.
              </p>
            ) : (
              <p className="text-gray-600 text-sm mb-4">
                Enter the 6-digit code from your authenticator app.
              </p>
            )}

            {mfaStep === 'setup' && qrImage && (
              <div className="flex justify-center mb-6 p-4 bg-gray-50 border rounded">
                <img src={qrImage} alt="2FA QR Code" className="w-48 h-48" />
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded text-sm font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleMfaSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value)}
                  className="w-full p-3 text-center tracking-widest text-xl bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                  placeholder="000000"
                  maxLength="6"
                  required 
                />
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors">
                Verify & Login
              </button>
            </form>

            <button onClick={resetLogin} className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline">
              Back to Login
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginPage;