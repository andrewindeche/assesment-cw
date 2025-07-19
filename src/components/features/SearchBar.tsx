import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import useDebouncedSearch from '@/hooks/useDebouncedSearch';

function SearchBar({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [input, setInput] = useState(initialValue);
  const debouncedSearch = useDebouncedSearch(input);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <div className="flex items-center bg-black px-4 py-2 rounded-md w-full max-w-xl mt-6 shadow-lg">
      <Search className="text-gray-400 w-5 h-5 mr-2" />
      <Input
        value={input}
        aria-label="hero section search input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 px-2 text-base sm:text-sm"
      />
      <Button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 ml-2 text-sm sm:text-xs">
        Search
      </Button>
    </div>
  );
}
export default SearchBar;
