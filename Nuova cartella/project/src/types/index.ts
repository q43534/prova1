export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: Category;
  date: string;
  author: string;
  tags: string[];
}

export type Category = 'ultime-notizie' | 'attualita' | 'cronaca' | 'provincia-vercelli';

export interface CategoryInfo {
  id: Category;
  name: string;
  url: string;
  description: string;
}