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
import TrendingUp from '@/components/TrendingUp';

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
  {
    id: 15,
    title: "Major City Announces Plans for Carbon-Neutral Public Transportation",
    excerpt: "The initiative aims to replace all fuel-based vehicles with electric alternatives by 2030.",
    category: "Environment",
    imageUrl: "https://images.unsplash.com/photo-1607429722991-7b365d981b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 2, 2025"
  }
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

// New mock data for politics news
const politicsNews: NewsItem[] = [
  {
    id: 16,
    title: "Parliament Approves Landmark Reform Package After Heated Debate",
    excerpt: "The controversial bill has passed with a slim majority after weeks of negotiation.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025"
  },
  {
    id: 17,
    title: "Election Commission Announces New Voting Security Measures",
    excerpt: "The changes aim to strengthen electoral integrity ahead of the upcoming national elections.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025"
  },
  {
    id: 18,
    title: "Opposition Leader Unveils Alternative Economic Policy",
    excerpt: "The plan proposes significant changes to taxation and public spending priorities.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
];

// New mock data for entertainment news
const entertainmentNews: NewsItem[] = [
  {
    id: 19,
    title: "Blockbuster Film Breaks Opening Weekend Records Worldwide",
    excerpt: "The highly anticipated sequel has surpassed all box office predictions in its first days of release.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025"
  },
  {
    id: 20,
    title: "Music Industry Awards Show Introduces New Sustainability Category",
    excerpt: "The award will recognize artists who demonstrate environmental leadership in their work and tours.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025"
  },
  {
    id: 21,
    title: "Streaming Platform Announces New Original Series with All-Star Cast",
    excerpt: "The drama series will feature several award-winning actors in their first collaboration.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
  {
    id: 22,
    title: "Celebrity Couple Launches Education Foundation for Underprivileged Youth",
    excerpt: "The initiative aims to provide scholarships and mentoring programs across multiple countries.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 4, 2025"
  },
];

// New mock data for sports news
const sportsNews: NewsItem[] = [
  {
    id: 23,
    title: "National Team Secures Spot in International Tournament Finals",
    excerpt: "The squad delivered a commanding performance in the semifinal match against the defending champions.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 7, 2025"
  },
  {
    id: 24,
    title: "Veteran Athlete Announces Retirement After Illustrious Career",
    excerpt: "The sports icon will conclude their professional journey at the end of the current season.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 6, 2025"
  },
  {
    id: 25,
    title: "Premier League Introduces New Technology for Officiating Decisions",
    excerpt: "The system will provide referees with enhanced data for more accurate judgment calls during matches.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    date: "April 5, 2025"
  },
];

const Index: React.FC = () => {
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
                          <a href="#">{item.title}</a>
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
                        <a href="#">{item.title}</a>
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
                        <a href="#">{item.title}</a>
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
