import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

function Header() {
  return (
    <header
      className="flex items-center justify-between px-9 py-4 bg-black border-b border-gray-400"
      aria-labelledby="header section"
    >
      <div className="flex items-center gap-3">
        <img src="/task1/logo.png" alt="Logo" className="w-3.5 h-3.5" />
        <div className="text-white font-bold text-md">Worctionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <span>
            <span>
              <span className="absolute left-3.5 top-2.5">
                <Search className="absolute left-1 top-2.5 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </span>
            </span>
          </span>
          <Input
            type="text"
            value="Search"
            aria-label="header search input"
            className="pl-12 w-37 h-10 bg-[#2b2e34] text-gray-400 text-2xl font-medium border-none focus:ring-0 rounded-md"
          />
        </div>
        <Avatar className="w-18 h-10">
          <AvatarImage src="assets/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
export default Header;
