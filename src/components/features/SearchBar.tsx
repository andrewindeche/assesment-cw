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
      <Search className="text-gray-400 mr-3" />
      <Input
        value={input}
        aria-label="hero section search input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button className="bg-blue-500 hover:bg-blue-700 text-white ml-4">Search</Button>
    </div>
  );
}
export default SearchBar;
