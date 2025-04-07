
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import TrendingSection from '@/components/TrendingSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { NewsItem } from '@/components/NewsCard';

// Mock data for the latest news
const latestNews: NewsItem[] = [
  {
    id: 1,
    title: "Global Climate Summit Results in Historic New Agreement",
    excerpt: "World leaders have reached a groundbreaking consensus on emission targets during the latest climate talks.",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025",
    readTime: "5 min read",
    authorName: "Sarah Johnson",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    title: "Revolutionary AI Breakthrough Transforms Healthcare Diagnostics",
    excerpt: "New artificial intelligence system demonstrates unprecedented accuracy in early disease detection.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1581093068324-3b283e0ff5e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025",
    readTime: "4 min read",
    authorName: "Michael Chen",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    title: "Economic Experts Predict Stability Despite Market Fluctuations",
    excerpt: "Leading economists remain optimistic about growth prospects despite recent volatility in global markets.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025",
    readTime: "3 min read",
    authorName: "Jessica Martinez",
    authorAvatar: "https://randomuser.me/api/portraits/women/29.jpg"
  },
];

// Mock data for technology news
const technologyNews: NewsItem[] = [
  {
    id: 4,
    title: "New Quantum Computing Milestone Achieved by Research Team",
    excerpt: "Scientists have successfully demonstrated quantum supremacy in a real-world application for the first time.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
  {
    id: 5,
    title: "Revolutionary Smartphone Design Features Expandable Display",
    excerpt: "Leading tech manufacturer unveils prototype with innovative screen technology that expands with a simple gesture.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1573739122661-d7dfb4e6ab9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 4, 2025"
  },
  {
    id: 6,
    title: "Major Social Platform Introduces New Privacy Controls",
    excerpt: "Users will gain unprecedented control over their data with the rollout of new privacy features next month.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 3, 2025"
  },
];

// Mock data for business news
const businessNews: NewsItem[] = [
  {
    id: 7,
    title: "Global Supply Chain Innovations Reduce Delivery Times by 40%",
    excerpt: "New logistics technologies and partnerships are revolutionizing how products move around the world.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 4, 2025"
  },
  {
    id: 8,
    title: "Renewable Energy Investments Reach All-Time High This Quarter",
    excerpt: "Global capital flowing into sustainable energy projects signals a major shift in investment priorities.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 3, 2025"
  },
  {
    id: 9,
    title: "Work-From-Anywhere Policies Becoming the New Corporate Standard",
    excerpt: "Major companies are abandoning traditional office requirements in favor of flexible work arrangements.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 2, 2025"
  },
];

// Mock data for trending news
const trendingNews: NewsItem[] = [
  {
    id: 10,
    title: "Space Tourism Company Announces First Civilian Lunar Mission",
    excerpt: "Private space venture plans to take paying customers on a journey around the moon next year.",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025"
  },
  {
    id: 11,
    title: "Professional Athletes Embrace New Nutrition Science for Performance",
    excerpt: "Cutting-edge dietary approaches are transforming recovery and endurance in professional sports.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025"
  },
  {
    id: 12,
    title: "Historic Peace Agreement Signed After Decades of Conflict",
    excerpt: "Regional leaders come together in landmark summit to end one of the world's longest-running disputes.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
  {
    id: 13,
    title: "Breakthrough Treatment Shows Promise for Previously Incurable Disease",
    excerpt: "Clinical trials demonstrate unprecedented success rate in treating patients with advanced cases.",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8553?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 4, 2025"
  },
  {
    id: 14,
    title: "Cultural Heritage Site Reopens After Extensive Restoration",
    excerpt: "Five-year project preserves ancient structures while implementing sustainable tourism practices.",
    category: "Culture",
    imageUrl: "https://images.unsplash.com/photo-1663578153408-bda7a23d33e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 3, 2025"
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-news-light">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CategorySection title="Latest News" news={latestNews} />
              <CategorySection title="Technology" news={technologyNews} />
              <CategorySection title="Business" news={businessNews} />
            </div>
            
            <div className="lg:col-span-1">
              <TrendingSection trendingNews={trendingNews} />
            </div>
          </div>
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
