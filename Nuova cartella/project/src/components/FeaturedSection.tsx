import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface FeaturedSectionProps {
  mainArticle: Article;
  sideArticles: Article[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ mainArticle, sideArticles }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-red-600 inline-block text-gray-800">
          In Evidenza
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured article */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <Link to={`/article/${mainArticle.id}`}>
                <div className="relative h-64 sm:h-80">
                  <img 
                    src={mainArticle.image} 
                    alt={mainArticle.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 text-xs uppercase font-semibold">
                    {mainArticle.category === 'ultime-notizie' && 'Ultime Notizie'}
                    {mainArticle.category === 'attualita' && 'Attualità'}
                    {mainArticle.category === 'cronaca' && 'Cronaca'}
                    {mainArticle.category === 'provincia-vercelli' && 'Provincia Vercelli'}
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>{mainArticle.date}</span>
                  <span className="mx-2">•</span>
                  <span>{mainArticle.author}</span>
                </div>
                
                <Link to={`/article/${mainArticle.id}`}>
                  <h3 className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors mb-2">
                    {mainArticle.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4">{mainArticle.excerpt}</p>
                
                <Link 
                  to={`/article/${mainArticle.id}`}
                  className="text-red-600 font-medium hover:text-red-800 transition-colors inline-flex items-center"
                >
                  Leggi l'articolo completo
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
            </article>
          </div>
          
          {/* Side featured articles */}
          <div className="space-y-6">
            {sideArticles.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row lg:flex-col">
                <Link to={`/article/${article.id}`} className="sm:w-1/3 lg:w-full">
                  <div className="h-48 sm:h-full lg:h-40 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-2 text-xs uppercase font-semibold">
                      {article.category === 'ultime-notizie' && 'Ultime Notizie'}
                      {article.category === 'attualita' && 'Attualità'}
                      {article.category === 'cronaca' && 'Cronaca'}
                      {article.category === 'provincia-vercelli' && 'Provincia Vercelli'}
                    </div>
                  </div>
                </Link>
                
                <div className="p-4 sm:w-2/3 lg:w-full">
                  <div className="flex items-center text-gray-500 text-xs mb-1">
                    <span>{article.date}</span>
                  </div>
                  
                  <Link to={`/article/${article.id}`}>
                    <h3 className="font-bold text-gray-800 hover:text-red-600 transition-colors text-sm sm:text-base mb-1">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;