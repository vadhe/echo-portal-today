
import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsCard';
import { TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrendingSectionProps {
  trendingNews: NewsItem[];
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ trendingNews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate trending news
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === trendingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [trendingNews.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? trendingNews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === trendingNews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-news-primary py-2 text-white mb-6 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-news-accent px-3 py-1 mr-4 rounded">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="font-bold text-sm uppercase">Trending</span>
            </div>
          </div>
          
          <div className="overflow-hidden relative flex-1">
            <div className="whitespace-nowrap overflow-hidden">
              <div className="inline-block w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {trendingNews.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`inline-block w-full ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                  >
                    <Link to="#" className="hover:underline text-sm md:text-base">
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex space-x-1 ml-2">
            <button 
              onClick={handlePrev} 
              className="p-1 hover:bg-white/20 rounded"
              aria-label="Previous trending news"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={handleNext} 
              className="p-1 hover:bg-white/20 rounded"
              aria-label="Next trending news"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
