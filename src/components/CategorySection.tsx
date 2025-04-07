
import React from 'react';
import NewsCard, { NewsItem } from './NewsCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  news: NewsItem[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, news }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-news-secondary">
            {title}
          </h2>
          <a 
            href={`#${title.toLowerCase()}`} 
            className="text-news-primary flex items-center hover:underline font-medium"
          >
            View All 
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="text-news-primary border-news-primary hover:bg-news-primary hover:text-white">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
