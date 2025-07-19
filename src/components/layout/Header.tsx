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
                <Search className="absolute left-1 top-2.5 -translate-y-1/2 text-gray-400 w-6 h-6"/>
              </span>
            </span>
          </span>
          <Input
            type="text"
            value="search"
            aria-label="header search input"
            className="pl-12 w-40 h-10 bg-[#2b2e33] text-white border-none focus:ring-0 rounded-md"
          />
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
export default Header;
