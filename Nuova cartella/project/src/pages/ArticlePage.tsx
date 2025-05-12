import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  getArticleById, 
  getArticlesByCategory 
} from '../data/mockArticles';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { categories } from '../data/categories';

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? getArticleById(articleId) : null;

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Articolo non trovato</h1>
        <p className="text-gray-600">L'articolo richiesto non esiste o è stato rimosso.</p>
        <Link 
          to="/"
          className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          Torna alla home
        </Link>
      </div>
    );
  }

  // Get category name
  const category = categories.find(cat => cat.id === article.category);
  
  // Get related articles (same category, excluding current article)
  const relatedArticles = getArticlesByCategory(article.category)
    .filter(relatedArticle => relatedArticle.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} - GiornaleNews</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link 
              to={`/category/${article.category}`} 
              className="hover:text-red-600 transition-colors"
            >
              {category?.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate">{article.title}</span>
          </nav>

          <article>
            {/* Back button */}
            <Link 
              to={`/category/${article.category}`}
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Torna a {category?.name}
            </Link>

            {/* Article header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <Link 
                    to={`/category/${article.category}`}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    {category?.name}
                  </Link>
                </div>
              </div>
            </header>

            {/* Featured image */}
            <figure className="mb-8">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-lg"
              />
            </figure>

            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="font-semibold text-xl mb-6">{article.excerpt}</p>
              
              {/* Generate some mock content based on the excerpt */}
              <p>
                {article.content}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in vestibulum tortor, vitae venenatis lectus. 
                Praesent gravida dapibus neque sit amet molestie. Morbi blandit eu dolor a luctus. Vestibulum sollicitudin 
                elit ac nunc scelerisque rhoncus. Nulla felis sapien, condimentum ut imperdiet vel, aliquet id ante. In 
                tempus dictum consectetur. Vivamus vitae auctor eros.
              </p>
              <p>
                Maecenas ut est in risus volutpat maximus. Morbi pellentesque fermentum ante ac finibus. Pellentesque
                malesuada quis mi ut rutrum. Cras dapibus libero purus, eu bibendum arcu feugiat condimentum. Maecenas
                tincidunt tortor sit amet ante pretium, ut hendrerit odio porttitor. Mauris malesuada vestibulum pharetra.
                Suspendisse pretium mollis fringilla. Morbi sodales, est eget facilisis vehicula, risus arcu porttitor augue,
                ac finibus dolor ante in sem. Duis nec vulputate augue. Nunc eu tempus enim.
              </p>
              <blockquote>
                "Le notizie devono essere verificate, accurate e contestualizzate per fornire ai lettori 
                informazioni affidabili su cui basare le proprie opinioni."
              </blockquote>
              <p>
                Praesent ac sapien eros. Suspendisse potenti. Morbi eu ante nibh. Proin dictum, tellus ut molestie tincidunt,
                urna tortor sodales velit, ut tempor lectus ipsum nec sapien. Nulla nec purus vitae libero aliquet posuere
                non et sapien. Cras in erat rhoncus, dignissim ligula iaculis, faucibus orci.
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social sharing */}
            <div className="border-t border-b border-gray-200 py-4 mb-8">
              <div className="flex items-center">
                <span className="mr-4 text-gray-700 font-medium">Condividi:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" 
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path 
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" 
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" 
                        d="M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 01-13.754 2.299l-5.814.735a.392.392 0 01-.438-.438l.748-5.788A12.002 12.002 0 013.517 3.517zm3.61 17.043l.3.158a9.846 9.846 0 0011.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 00-1.747 11.554l.16.303-.51 3.942a.196.196 0 00.219.22l3.961-.501zm6.534-7.003l-.933 1.164a9.843 9.843 0 01-3.497-3.495l1.166-.933a.792.792 0 00.23-.94L9.561 6.96a.793.793 0 00-.924-.445 1291.6 1291.6 0 00-2.023.524.797.797 0 00-.588.88 11.754 11.754 0 0010.005 10.005.797.797 0 00.88-.587l.525-2.023a.793.793 0 00-.445-.923L14.6 13.327a.792.792 0 00-.94.23z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 pb-2 border-b-2 border-red-600 inline-block">
              Articoli correlati
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {relatedArticles.map(relatedArticle => (
                <ArticleCard 
                  key={relatedArticle.id} 
                  article={relatedArticle} 
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ArticlePage;