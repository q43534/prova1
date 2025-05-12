import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pagina non trovata - GiornaleNews</title>
        <meta name="description" content="La pagina richiesta non è stata trovata" />
      </Helmet>

      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pagina non trovata</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/" 
            className="bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Torna alla Home
          </Link>
          
          <Link 
            to="/search" 
            className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <Search className="h-5 w-5 mr-2" />
            Cerca nel sito
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;