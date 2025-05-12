import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticlesList from '../components/ArticlesList';
import { getArticlesByCategory } from '../data/mockArticles';
import { categories } from '../data/categories';
import { Category } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Validate that the category ID is valid
  const isValidCategory = categoryId && ['ultime-notizie', 'attualita', 'cronaca', 'provincia-vercelli'].includes(categoryId);
  
  // If invalid category, show error message
  if (!isValidCategory) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Categoria non trovata</h1>
        <p className="text-gray-600">La categoria richiesta non esiste.</p>
      </div>
    );
  }

  // Get category information
  const category = categories.find(cat => cat.id === categoryId);
  
  // Get articles for this category
  const articles = getArticlesByCategory(categoryId as Category);

  return (
    <>
      <Helmet>
        <title>{category?.name || 'Categoria'} - GiornaleNews</title>
        <meta name="description" content={category?.description || 'Articoli di categoria'} />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center py-8 bg-gray-100 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category?.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{category?.description}</p>
        </header>

        <ArticlesList 
          articles={articles} 
          showFeature={true}
        />
      </main>
    </>
  );
};

export default CategoryPage;