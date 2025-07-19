import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

function Header() {
  return (
    <header className="flex items-center justify-between px-9 py-4 bg-black border-b border-gray-800" aria-labelledby="header section">
      <div className="flex items-center gap-3">
        <img src="/task1/logo.png" alt="Logo" className="w-3.5 h-3.5" />
        <div className="text-white font-bold text-md">Worctionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <span>
            <span>
              <span className="absolute left-3 top-2.5">
                <Search className="text-gray-400 text-sm" />
              </span>
            </span>
          </span>
          <Input
            type="text"
            value="search"
            aria-label="header search input"
            className="pl-12 bg-gray-800 text-white border-none focus:ring-0 rounded-md"
          />
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
export default Header;
