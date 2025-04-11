
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { fetchNewsById } from '@/services/strapi';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsId = id || '1';
  
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news', newsId],
    queryFn: () => fetchNewsById(newsId),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-center mb-4">Loading...</h1>
            <p className="text-center mb-6">Fetching article details</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-center mb-4">Article Not Found</h1>
            <p className="text-center mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-[21/9] relative">
            <img 
              src={news.imageUrl} 
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-news-accent text-white rounded mb-2">
                {news.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {news.title}
              </h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <div className="flex items-center">
                {news.authorAvatar && (
                  <img 
                    src={news.authorAvatar} 
                    alt={news.authorName || 'Author'} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm font-medium">{news.authorName || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{news.date}</span>
                    {news.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{news.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content || '' }}
            />
            
            <AdBanner className="my-8" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
