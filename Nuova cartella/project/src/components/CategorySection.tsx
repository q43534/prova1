import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Article, Category } from '../types';

interface CategorySectionProps {
  title: string;
  category: Category;
  articles: Article[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, category, articles }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = articles.length;

  useEffect(() => {
    const preloadImages = () => {
      articles.forEach(article => {
        const img = new Image();
        img.src = article.image;
        img.onload = () => setImagesLoaded(prev => prev + 1);
      });
    };

    preloadImages();
  }, [articles]);

  if (articles.length === 0) return null;

  // Use the first article as the main feature
  const mainArticle = articles[0];
  // Use the next 4 articles as secondary features
  const secondaryArticles = articles.slice(1, 5);

  return (
    <section className="py-8" id={`category-${category}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold pb-2 border-b-2 border-red-600 text-gray-800">
            {title}
          </h2>
          <Link 
            to={`/category/${category}`} 
            className="text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
          >
            Vedi tutti
          </Link>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${imagesLoaded === totalImages ? 'opacity-100' : 'opacity-50'}`}>
          {/* Main featured article - takes up 2 columns */}
          <div className="md:col-span-2 lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <Link to={`/article/${mainArticle.id}`}>
                <div className="relative h-56 sm:h-64 bg-gray-200">
                  <img 
                    src={mainArticle.image} 
                    alt={mainArticle.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 text-xs uppercase font-semibold">
                    {mainArticle.category === 'ultime-notizie' && 'Ultime Notizie'}
                    {mainArticle.category === 'attualita' && 'Attualità'}
                    {mainArticle.category === 'cronaca' && 'Cronaca'}
                    {mainArticle.category === 'provincia-vercelli' && 'Provincia Vercelli'}
                  </div>
                </div>
              </Link>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>{mainArticle.date}</span>
                </div>
                
                <Link to={`/article/${mainArticle.id}`}>
                  <h3 className="text-xl font-bold text-gray-800 hover:text-red-600 transition-colors mb-2">
                    {mainArticle.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-3 line-clamp-3">{mainArticle.excerpt}</p>
                
                <div className="mt-auto">
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
              </div>
            </article>
          </div>
          
          {/* Secondary articles - 2 columns layout */}
          {secondaryArticles.map(article => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <Link to={`/article/${article.id}`}>
                <div className="relative h-40 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Link>
              
              <div className="p-3 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-xs mb-1">
                  <span>{article.date}</span>
                </div>
                
                <Link to={`/article/${article.id}`}>
                  <h3 className="font-bold text-gray-800 hover:text-red-600 transition-colors mb-2 text-sm sm:text-base line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/article/${article.id}`}
                    className="text-red-600 text-sm font-medium hover:text-red-800 transition-colors inline-flex items-center"
                  >
                    Leggi di più
                    <svg 
                      className="w-3 h-3 ml-1" 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;