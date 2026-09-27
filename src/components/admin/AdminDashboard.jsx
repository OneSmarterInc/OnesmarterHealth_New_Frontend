// frontend/src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [socialLinks, setSocialLinks] = useState([]);
  const [newPlatform, setNewPlatform] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      const response = await api.get('/api/social-links/');
      setSocialLinks(response.data);
    } catch (err) {
      console.error("Error fetching links", err);
    }
  };

  const handleAddSocial = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const token = localStorage.getItem('access_token');
      await api.post('/api/social-links/', {
        platform: newPlatform,
        url: newUrl,
        is_active: true
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewPlatform('');
      setNewUrl('');
      fetchSocialLinks();
    } catch (err) {
      setErrorMsg('Failed to add link. Make sure you are logged in as admin.');
    }
  };

  const handleDeleteSocial = async (id) => {
    try {
      const token = localStorage.getItem('access_token');
      await api.delete(`/api/social-links/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchSocialLinks();
    } catch (err) {
      console.error("Failed to delete link", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600">System overview and footer social management.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
          >
            Logout
          </button>
        </header>

        {/* Social Media Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Manage Footer Social Links</h2>
          
          {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}

          <form onSubmit={handleAddSocial} className="flex flex-wrap gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Platform Name (e.g. Twitter)" 
              value={newPlatform}
              onChange={(e) => setNewPlatform(e.target.value)}
              className="p-2 border rounded flex-1 min-w-[200px]"
              required
            />
            <input 
              type="url" 
              placeholder="Profile URL (https://...)" 
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="p-2 border rounded flex-2 min-w-[300px]"
              required
            />
            <button type="submit" className="bg-[#1a3636] text-white px-6 py-2 rounded hover:bg-[#122626]">
              Add Link
            </button>
          </form>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 border-b">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">URL</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {socialLinks.map((link) => (
                  <tr key={link.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{link.platform}</td>
                    <td className="px-4 py-3 text-blue-600 truncate max-w-xs">{link.url}</td>
                    <td className="px-4 py-3">
                      <button 
                        onClick={() => handleDeleteSocial(link.id)}
                        className="text-red-600 hover:underline font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {socialLinks.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-400">No social links added yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;