// frontend/src/App.jsx
import React from 'react';

// Utility & Layout Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Your separate router file
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <ScrollToTop />
      
      <Navbar />
      
      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;