
import React, { useRef } from 'react';
import { NewsItem } from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalNewsSectionProps {
  news: NewsItem[];
}

const HorizontalNewsSection: React.FC<HorizontalNewsSectionProps> = ({ news }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex-1"></div>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {news.map((item) => (
          <div key={item.id} className="flex-none w-64">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalNewsSection;
