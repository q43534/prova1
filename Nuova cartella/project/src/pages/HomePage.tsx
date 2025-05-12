import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturedSection from '../components/FeaturedSection';
import CategorySection from '../components/CategorySection';
import {
  articlesUltimeNotizie,
  articlesAttualita,
  articlesCronaca,
  articlesProvinciaVercelli
} from '../data/mockArticles';

const HomePage: React.FC = () => {
  // Use the first article from Ultime Notizie as the main featured article
  const mainFeaturedArticle = articlesUltimeNotizie[0];
  
  // Use one article from each other category for side features
  const sideFeaturedArticles = [
    articlesAttualita[0],
    articlesCronaca[0],
    articlesProvinciaVercelli[0]
  ];

  return (
    <>
      <Helmet>
        <title>GiornaleNews - Il portale di notizie online</title>
        <meta name="description" content="Le ultime notizie su attualità, cronaca e eventi della provincia di Vercelli" />
      </Helmet>

      <main>
        {/* Featured Section */}
        <FeaturedSection 
          mainArticle={mainFeaturedArticle} 
          sideArticles={sideFeaturedArticles} 
        />
        
        {/* Category Sections */}
        <CategorySection 
          title="Ultime Notizie" 
          category="ultime-notizie" 
          articles={articlesUltimeNotizie} 
        />
        
        <CategorySection 
          title="Attualità" 
          category="attualita" 
          articles={articlesAttualita} 
        />
        
        <CategorySection 
          title="Cronaca" 
          category="cronaca" 
          articles={articlesCronaca} 
        />
        
        <CategorySection 
          title="In Provincia di Vercelli" 
          category="provincia-vercelli" 
          articles={articlesProvinciaVercelli} 
        />
      </main>
    </>
  );
};

export default HomePage;