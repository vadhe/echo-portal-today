
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { NewsItem } from '@/components/NewsCard';

// Mock function to get a news item by ID
const getNewsById = (id: string): NewsItem | undefined => {
  // This would normally fetch from an API
  // For demo purposes, we'll return mock data
  return {
    id: parseInt(id),
    title: "Global Climate Summit Results in Historic New Agreement",
    excerpt: "World leaders have reached a groundbreaking consensus on emission targets during the latest climate talks.",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025",
    readTime: "5 min read",
    authorName: "Sarah Johnson",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      <p>World leaders gathered at the Global Climate Summit have finalized a historic agreement that sets ambitious new emission reduction targets. The landmark decision comes after two weeks of intense negotiations and represents a significant step forward in international climate cooperation.</p>
      
      <p>Under the new agreement, nations commit to reducing carbon emissions by 60% by 2035 compared to 2010 levels, with a pathway to achieve net-zero emissions by 2050. Developed nations have also pledged substantial financial support to help developing countries transition to clean energy.</p>
      
      <p>"This is a defining moment for our planet," said UN Secretary-General at the closing ceremony. "For the first time, we have a truly global commitment that matches the scale of the climate crisis we face."</p>
      
      <h2>Key Points of the Agreement</h2>
      
      <p>The agreement includes several groundbreaking provisions:</p>
      
      <ul>
        <li>Mandatory five-year review cycles to ensure countries are meeting targets</li>
        <li>A new international carbon pricing framework</li>
        <li>Accelerated phase-out of coal power generation by 2030</li>
        <li>Creation of a $100 billion annual climate fund to support transition efforts</li>
        <li>Enhanced transparency measures to track emissions accurately</li>
      </ul>
      
      <p>Climate scientists have broadly welcomed the agreement, though some activists argue the targets should be more ambitious given the accelerating pace of climate change.</p>
      
      <h2>Market Response</h2>
      
      <p>Financial markets responded positively to the news, with renewable energy stocks seeing significant gains. Analysts suggest the clear policy signals will accelerate private sector investment in clean technology and sustainable infrastructure.</p>
      
      <p>"This agreement provides the long-term certainty that investors have been seeking," said Maria Rodriguez, chief economist at Global Investment Partners. "We expect to see a substantial reallocation of capital toward low-carbon solutions over the next decade."</p>
      
      <p>The implementation phase begins immediately, with countries required to submit detailed action plans within 12 months. A new international oversight body will be established to monitor progress and provide technical assistance where needed.</p>
      
      <p>As delegates departed the summit, there was a palpable sense of optimism that the global community has finally aligned on a response proportionate to the climate challenge. The true test, however, will be turning these commitments into concrete action in the months and years ahead.</p>
    `
  };
};

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const news = getNewsById(id || '1');

  if (!news) {
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
              
              {/* Share buttons would go here */}
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content || '' }}
            />
            
            <AdBanner className="my-8" />
            
            {/* Related articles would go here */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
