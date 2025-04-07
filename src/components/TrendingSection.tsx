
import React from 'react';
import NewsCard, { NewsItem } from './NewsCard';
import { TrendingUp } from 'lucide-react';

interface TrendingSectionProps {
  trendingNews: NewsItem[];
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ trendingNews }) => {
  return (
    <aside className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-5 w-5 mr-2 text-news-accent" />
        <h2 className="text-xl font-bold text-news-secondary">Trending Now</h2>
      </div>
      
      <div className="space-y-6">
        {trendingNews.map((item) => (
          <NewsCard key={item.id} news={item} variant="compact" />
        ))}
      </div>
    </aside>
  );
};

export default TrendingSection;
