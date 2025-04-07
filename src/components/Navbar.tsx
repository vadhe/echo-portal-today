
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const categories = [
  { name: 'Politics', path: '#politics' },
  { name: 'Business', path: '#business' },
  { name: 'Technology', path: '#technology' },
  { name: 'Science', path: '#science' },
  { name: 'Health', path: '#health' },
  { name: 'Sports', path: '#sports' },
  { name: 'Entertainment', path: '#entertainment' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-news-primary">
              EchoNews
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a 
                key={category.name} 
                href={category.path}
                className="text-news-secondary hover:text-news-primary transition-colors"
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              className="hover:bg-gray-100 text-news-secondary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 text-news-secondary md:flex hidden">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-news-primary hover:bg-blue-600">
              Subscribe
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="md:hidden text-news-secondary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-2">
              {categories.map((category) => (
                <a 
                  key={category.name} 
                  href={category.path}
                  className="text-news-secondary hover:text-news-primary transition-colors py-2 px-4"
                >
                  {category.name}
                </a>
              ))}
              <Button className="mt-4 bg-news-primary hover:bg-blue-600">
                Subscribe
              </Button>
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 bg-white p-4 border-b shadow-md animate-fade-in">
            <SearchBar closeSearch={() => setIsSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
