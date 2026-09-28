// frontend/src/components/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const BlogPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get('/api/cancer-news/');
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news", err);
        setError("Unable to load latest news at this time.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const createMarkup = (html) => {
    return { __html: html };
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-[#f9fbf9] min-h-screen pb-24 text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-[#173a38] text-white py-24 px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#8ebfaf] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            LATEST UPDATES
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-[1.1] mb-6 max-w-4xl">
            Global oncology news and research.
          </h1>
          <p className="text-[#dce5e2] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Stay informed with the latest developments in cancer research, treatments, and policy aggregated from leading medical institutions.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 pt-16">
        
        {loading && (
          <div className="flex justify-center items-center py-20 text-gray-500 font-medium">
            <svg className="animate-spin h-6 w-6 text-[#173a38] mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading latest news...
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded shadow-sm border border-red-100 mb-8 font-medium">
            {error}
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="text-gray-500 py-12 text-lg font-light text-center border-2 border-dashed border-gray-200 rounded-lg">
            No news articles available at the moment. The system is fetching recent updates.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((article) => {
            const imageIndex = (article.id % 10) + 1;
            // Changed from .jpg to .png here
            const imageUrl = `/images/image_${imageIndex}.png`;

            return (
              <Link 
                to={`/blog/${article.id}`}
                key={article.id} 
                className="bg-white rounded shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all group block no-underline"
              >
                
                <div className="w-full h-52 overflow-hidden bg-gray-100">
                  <img 
                    src={imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x400/eaf0ed/173a38?text=Medical+News';
                    }}
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[#5c7c73] text-xs font-bold tracking-wider uppercase">
                      {article.source || 'Medical News'}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">
                      {formatDate(article.pub_date)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#173a38] transition-colors">
                    {article.title}
                  </h3>
                  
                  <div 
                    className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3 mb-6"
                    dangerouslySetInnerHTML={createMarkup(article.description)}
                  />
                </div>
                
                <div className="px-8 pb-8 mt-auto border-t border-gray-50 pt-6">
                  <span className="text-[#173a38] font-semibold text-sm inline-flex items-center group-hover:text-red-600 transition-colors">
                    Read full details
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>

              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default BlogPage;