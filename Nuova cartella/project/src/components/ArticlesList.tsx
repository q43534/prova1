import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../types';

interface ArticlesListProps {
  articles: Article[];
  title?: string;
  showFeature?: boolean;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ 
  articles, 
  title, 
  showFeature = false 
}) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Nessun articolo trovato.</p>
      </div>
    );
  }

  // If showFeature is true, use the first article as feature and rest as regular articles
  const featureArticle = showFeature ? articles[0] : null;
  const regularArticles = showFeature ? articles.slice(1) : articles;

  return (
    <div className="my-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-red-600 inline-block text-gray-800">
          {title}
        </h2>
      )}

      <div className="space-y-8">
        {featureArticle && (
          <div className="mb-8">
            <ArticleCard article={featureArticle} isFeature={true} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;