
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  closeSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ closeSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the search bar is opened
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Add event listener for Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', inputRef.current?.value);
    // Implement search functionality here
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input 
          ref={inputRef}
          className="pl-10 pr-10 py-6 text-lg w-full" 
          placeholder="Search for news, topics..." 
        />
        <Button 
          type="button"
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2" 
          onClick={closeSearch}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <Button type="submit" className="bg-news-primary hover:bg-blue-600">Search</Button>
    </form>
  );
};

export default SearchBar;
