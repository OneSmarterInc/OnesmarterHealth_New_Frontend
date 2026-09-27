// frontend/src/components/DoctorDashboard.jsx
import React from 'react';

const DoctorDashboard = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-600">Manage your appointments and patient reviews.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Action Sidebar */}
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <button className="w-full bg-red-600 text-white py-2 rounded mb-2 hover:bg-red-700">Start E-Consult</button>
              <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900">Upload Report</button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Patient Queue</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-700 border-b">
                  <tr>
                    <th className="px-4 py-3">Patient Name</th>
                    <th className="px-4 py-3">Condition</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">John Doe</td>
                    <td className="px-4 py-3">General Review</td>
                    <td className="px-4 py-3">10:00 AM</td>
                    <td className="px-4 py-3">
                      <button className="text-red-600 hover:underline">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;