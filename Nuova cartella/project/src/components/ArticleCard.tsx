import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  isFeature?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isFeature = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
      ${isFeature ? 'flex flex-col lg:flex-row' : 'flex flex-col'}`}
    >
      <Link to={`/article/${article.id}`} className={isFeature ? 'lg:w-1/2' : 'w-full'}>
        <div className="relative overflow-hidden h-48 sm:h-56 bg-gray-200">
          <img 
            src={article.image} 
            alt={article.title} 
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out
              ${imageLoaded ? 'opacity-100 hover:scale-105' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 text-xs uppercase font-semibold">
            {article.category === 'ultime-notizie' && 'Ultime Notizie'}
            {article.category === 'attualita' && 'Attualità'}
            {article.category === 'cronaca' && 'Cronaca'}
            {article.category === 'provincia-vercelli' && 'Provincia Vercelli'}
          </div>
        </div>
      </Link>
      
      <div className={`p-4 flex flex-col ${isFeature ? 'lg:w-1/2' : ''}`}>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{article.date}</span>
        </div>
        
        <Link to={`/article/${article.id}`}>
          <h3 className={`font-bold text-gray-800 hover:text-red-600 transition-colors mb-2
            ${isFeature ? 'text-xl sm:text-2xl' : 'text-lg'}`}
          >
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-3 line-clamp-3">{article.excerpt}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/article/${article.id}`}
            className="text-red-600 font-medium hover:text-red-800 transition-colors inline-flex items-center"
          >
            Leggi di più
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;