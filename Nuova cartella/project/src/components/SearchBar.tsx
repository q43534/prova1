import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onClose?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      if (onClose) onClose();
    }
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            className="w-full py-3 px-4 outline-none text-gray-700"
            placeholder="Cerca articoli..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Campo di ricerca"
          />
          <button
            type="submit"
            className="bg-red-600 text-white p-3 hover:bg-red-700 transition-colors"
            aria-label="Cerca"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-0 top-full mt-2 text-gray-500 hover:text-gray-700"
            aria-label="Chiudi ricerca"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;