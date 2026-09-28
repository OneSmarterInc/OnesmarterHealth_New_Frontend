// frontend/src/components/ArticleDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.get(`/api/cancer-news/${id}/`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching article", err);
        setError("Unable to load the article details.");
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const createMarkup = (html) => {
    return { __html: html };
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center text-gray-500 bg-[#f9fbf9]">
        <svg className="animate-spin h-8 w-8 text-[#173a38] mr-3" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading article...
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center bg-[#f9fbf9] px-6">
        <div className="bg-red-50 text-red-600 p-6 rounded border border-red-100 max-w-lg text-center">
          <p className="font-medium mb-4">{error || "Article not found"}</p>
          <button onClick={() => navigate('/blog')} className="text-[#173a38] hover:underline font-bold">
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Safely grab the same image index based on ID to match the blog page card exactly
  const imageIndex = article?.id ? (article.id % 10) + 1 : 1;
  const imageUrl = `/images/image_${imageIndex}.png`;

  return (
    <div className="bg-[#f9fbf9] min-h-screen pb-24 text-gray-900">
      
      {/* Article Header */}
      <section className="bg-[#173a38] text-white py-16 px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate('/blog')} className="text-[#8ebfaf] hover:text-white transition-colors text-sm font-bold tracking-[0.1em] uppercase mb-8 inline-flex items-center gap-2">
            <span>←</span> Back to all updates
          </button>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-[#112a29] text-[#b9e5df] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase">
              {article.source || 'Medical News'}
            </span>
            <span className="text-[#dce5e2] text-sm font-medium">
              {formatDate(article.pub_date)}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-normal leading-[1.2]">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pt-16">
        <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
          
          <div className="w-full h-64 sm:h-80 md:h-[400px] bg-gray-100 border-b border-gray-100">
            <img 
              src={imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/1200x600/eaf0ed/173a38?text=Medical+News';
              }}
            />
          </div>

          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed mb-12"
              dangerouslySetInnerHTML={createMarkup(article.description)}
            />

            <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-500">
                This article was aggregated from {article.source}.
              </p>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#173a38] text-white px-6 py-3 rounded font-medium hover:bg-[#112a29] transition-colors inline-flex items-center shrink-0"
              >
                Read Full Article at Source <span className="ml-2">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;