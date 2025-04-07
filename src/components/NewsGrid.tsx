
import React from 'react';
import { NewsItem } from './NewsCard';

interface NewsGridProps {
  news: NewsItem[];
  layout: 'standard' | 'featured' | 'compact';
}

const NewsGrid: React.FC<NewsGridProps> = ({ news, layout }) => {
  if (layout === 'featured') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item, index) => (
          <div 
            key={item.id} 
            className={`bg-white rounded-lg shadow-sm overflow-hidden ${
              index === 0 ? 'md:row-span-2 md:col-span-1' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'aspect-[4/5] md:aspect-auto md:h-full' : 'aspect-video'}`}>
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-news-accent text-white rounded mb-2">
                  {item.category}
                </span>
                <h3 className={`font-bold text-white mb-1 ${index === 0 ? 'text-xl' : 'text-base'}`}>
                  <a href="#" className="hover:underline">{item.title}</a>
                </h3>
                <div className="text-xs text-gray-300">{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (layout === 'compact') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-3">
              <span className="text-xs font-medium text-news-accent">{item.category}</span>
              <h3 className="text-sm font-semibold line-clamp-2 hover:text-news-primary">
                <a href="#">{item.title}</a>
              </h3>
              <div className="text-xs text-gray-500 mt-1">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Standard layout
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((item) => (
        <div key={item.id} className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="w-1/3 flex-shrink-0">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="w-2/3 p-4">
            <span className="text-xs font-medium text-news-accent">{item.category}</span>
            <h3 className="text-base font-semibold line-clamp-2 hover:text-news-primary">
              <a href="#">{item.title}</a>
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{item.excerpt}</p>
            <div className="text-xs text-gray-500 mt-2">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
