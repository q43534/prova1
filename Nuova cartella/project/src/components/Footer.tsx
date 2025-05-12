import React from 'react';
import { Newspaper, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">GiornaleNews</span>
            </div>
            <p className="text-gray-300 mb-4">
              Il tuo portale di notizie online per rimanere aggiornato su ultime notizie, 
              attualità, cronaca e eventi della provincia di Vercelli.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Sezioni</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contatti</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Via Giornalistica, 123</p>
              <p className="mb-2">13100 Vercelli (VC)</p>
              <p className="mb-2">Email: info@giornalenews.it</p>
              <p>Tel: +39 0161 123456</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} GiornaleNews. Tutti i diritti riservati.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;