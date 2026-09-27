// frontend/src/components/PatientDashboard.jsx
import React from 'react';

const PatientDashboard = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here is your health overview.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Consultations</h3>
            <p className="text-3xl font-bold text-red-600">1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Prescriptions</h3>
            <p className="text-3xl font-bold text-red-600">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Reports</h3>
            <p className="text-3xl font-bold text-red-600">0</p>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">My Inquiries</h2>
            <div className="text-gray-500 text-sm">
              <p className="py-3 border-b">Inquiry #1024 - Oncology Review (Status: Pending)</p>
            </div>
          </div>

          {/* Profile Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">My Profile</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Email:</strong> john@example.com</li>
              <li><strong>Role:</strong> Patient</li>
            </ul>
            <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;