
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import TrendingSection from '@/components/TrendingSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { NewsItem } from '@/components/NewsCard';
import NewsGrid from '@/components/NewsGrid';
import HorizontalNewsSection from '@/components/HorizontalNewsSection';
import AdBanner from '@/components/AdBanner';
import { TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllNews, fetchNewsByCategory, fetchFeaturedNews } from '@/services/strapi';

const Index: React.FC = () => {
  // Fetch all news articles
  const { data: allNews = [] } = useQuery({
    queryKey: ['news'],
    queryFn: fetchAllNews,
  });

  // Fetch trending/featured news
  const { data: trendingNews = [] } = useQuery({
    queryKey: ['news', 'trending'],
    queryFn: fetchFeaturedNews,
  });

  // Fetch news by categories
  const { data: technologyNews = [] } = useQuery({
    queryKey: ['news', 'technology'],
    queryFn: () => fetchNewsByCategory('Technology'),
  });

  const { data: businessNews = [] } = useQuery({
    queryKey: ['news', 'business'],
    queryFn: () => fetchNewsByCategory('Business'),
  });

  const { data: politicsNews = [] } = useQuery({
    queryKey: ['news', 'politics'],
    queryFn: () => fetchNewsByCategory('Politics'),
  });

  const { data: entertainmentNews = [] } = useQuery({
    queryKey: ['news', 'entertainment'],
    queryFn: () => fetchNewsByCategory('Entertainment'),
  });

  const { data: sportsNews = [] } = useQuery({
    queryKey: ['news', 'sports'],
    queryFn: () => fetchNewsByCategory('Sports'),
  });

  // Use all news as latest news
  const latestNews = allNews.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <TrendingSection trendingNews={trendingNews} />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-6">
          {/* Ad Banner */}
          <AdBanner className="mb-8" />
          
          {/* Top News Grid - 2x2 Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-news-secondary mb-4 border-b-2 border-news-primary pb-2">
              Top Stories
            </h2>
            <NewsGrid news={latestNews} layout="featured" />
          </div>
          
          {/* Main Content Area with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Politics Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-news-secondary mb-4 border-b-2 border-news-accent pb-2">
                  Politics
                </h2>
                <NewsGrid news={politicsNews} layout="compact" />
              </div>
              
              {/* Ad Banner */}
              <AdBanner className="mb-8" />
              
              {/* Business Section with Horizontal Scroll */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-news-secondary mb-4 border-b-2 border-red-500 pb-2">
                  Business
                </h2>
                <HorizontalNewsSection news={businessNews} />
              </div>
              
              {/* Technology Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-news-secondary mb-4 border-b-2 border-blue-500 pb-2">
                  Technology
                </h2>
                <NewsGrid news={technologyNews} layout="standard" />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Trending Now Sidebar */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 mr-2 text-news-accent" />
                  <h2 className="text-xl font-bold text-news-secondary">Most Read</h2>
                </div>
                
                <div className="space-y-4">
                  {trendingNews.slice(0, 5).map((item, index) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 font-bold text-2xl text-gray-300">{index + 1}</span>
                      <div>
                        <span className="text-xs font-medium text-news-accent block">{item.category}</span>
                        <h3 className="text-sm font-semibold text-news-secondary hover:text-news-primary">
                          <a href={`/news/${item.id}`}>{item.title}</a>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ad Banner */}
              <AdBanner className="mb-6" isSquare />
              
              {/* Entertainment News */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-news-secondary mb-4 border-b-2 border-purple-500 pb-2">
                  Entertainment
                </h2>
                <div className="space-y-4">
                  {entertainmentNews.slice(0, 4).map((item) => (
                    <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs font-medium text-news-accent block">{item.category}</span>
                      <h3 className="text-sm font-semibold text-news-secondary hover:text-news-primary">
                        <a href={`/news/${item.id}`}>{item.title}</a>
                      </h3>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sports News */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-news-secondary mb-4 border-b-2 border-green-500 pb-2">
                  Sports
                </h2>
                <div className="space-y-4">
                  {sportsNews.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs font-medium text-news-accent block">{item.category}</span>
                      <h3 className="text-sm font-semibold text-news-secondary hover:text-news-primary">
                        <a href={`/news/${item.id}`}>{item.title}</a>
                      </h3>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* More Categories Section */}
          <CategorySection title="Latest News" news={latestNews} />
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
