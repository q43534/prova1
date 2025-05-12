import React, { useState } from 'react';
import { Newspaper, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with logo and search */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Newspaper className="h-8 w-8 text-red-600" />
          <span className="text-2xl font-bold text-gray-800">GiornaleNews</span>
        </Link>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSearch}
            aria-label="Search"
            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-red-600 md:hidden transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-red-600 text-white ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:justify-center">
            <li>
              <Link 
                to="/" 
                className="block py-3 px-4 hover:bg-red-700 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {categories.map(category => (
              <li key={category.id}>
                <Link 
                  to={`/category/${category.id}`} 
                  className="block py-3 px-4 hover:bg-red-700 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fadeIn">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;