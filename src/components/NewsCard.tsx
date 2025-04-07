
import React from 'react';
import { CalendarIcon, Clock } from 'lucide-react';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime?: string;
  authorName?: string;
  authorAvatar?: string;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'featured' | 'compact';
}

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-news-accent text-white rounded mb-2">
            {news.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {news.title}
          </h3>
          <div className="flex items-center text-gray-300 text-sm">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{news.date}</span>
            {news.readTime && (
              <>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{news.readTime}</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className="flex items-start space-x-4 group">
        <div className="w-24 h-24 overflow-hidden rounded flex-shrink-0">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium text-news-accent">{news.category}</span>
          <h3 className="text-base font-semibold text-news-secondary group-hover:text-news-primary transition-colors">
            {news.title}
          </h3>
          <div className="flex items-center text-news-muted text-xs mt-1">
            <span>{news.date}</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Default card
  return (
    <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium text-news-accent">
            {news.category}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs text-news-muted">{news.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-news-secondary group-hover:text-news-primary transition-colors mb-2">
          {news.title}
        </h3>
        <p className="text-news-muted text-sm line-clamp-2">
          {news.excerpt}
        </p>
        {news.authorName && (
          <div className="flex items-center mt-4 space-x-2">
            {news.authorAvatar && (
              <img 
                src={news.authorAvatar} 
                alt={news.authorName} 
                className="w-8 h-8 rounded-full object-cover" 
              />
            )}
            <span className="text-xs font-medium">{news.authorName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
