
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for featured news
const featuredNews = [
  {
    id: 1,
    title: "Global Climate Summit Results in Historic New Agreement",
    excerpt: "World leaders have reached a groundbreaking consensus on emission targets during the latest climate talks.",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025"
  },
  {
    id: 2,
    title: "Revolutionary AI Breakthrough Transforms Healthcare Diagnostics",
    excerpt: "New artificial intelligence system demonstrates unprecedented accuracy in early disease detection.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1581093068324-3b283e0ff5e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025"
  },
  {
    id: 3,
    title: "Economic Experts Predict Stability Despite Market Fluctuations",
    excerpt: "Leading economists remain optimistic about growth prospects despite recent volatility in global markets.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredNews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredNews.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative bg-gray-100 overflow-hidden h-[500px] md:h-[600px]">
      {featuredNews.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10 text-white">
            <div className="container mx-auto">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-news-accent rounded">
                {item.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 max-w-4xl">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl mb-4 max-w-3xl text-gray-200">
                {item.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{item.date}</span>
                <Button className="bg-news-primary hover:bg-blue-600">
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <div className="absolute bottom-5 right-5 z-30 flex space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
