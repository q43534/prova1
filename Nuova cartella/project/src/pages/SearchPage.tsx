import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticlesList from '../components/ArticlesList';
import SearchBar from '../components/SearchBar';
import { searchArticles } from '../data/mockArticles';
import { Article } from '../types';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setSearchQuery(query);
      const results = searchArticles(query);
      setSearchResults(results);
    }
  }, [location.search]);

  return (
    <>
      <Helmet>
        <title>Ricerca: {searchQuery} - GiornaleNews</title>
        <meta name="description" content={`Risultati della ricerca per: ${searchQuery}`} />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Risultati della ricerca</h1>
          <div className="max-w-2xl">
            <SearchBar className="mb-4" />
          </div>
          <p className="text-gray-600">
            {searchResults.length === 0 
              ? `Nessun risultato trovato per: "${searchQuery}"` 
              : `${searchResults.length} risultati trovati per: "${searchQuery}"`}
          </p>
        </header>

        <ArticlesList 
          articles={searchResults} 
          showFeature={searchResults.length > 0}
        />
      </main>
    </>
  );
};

export default SearchPage;